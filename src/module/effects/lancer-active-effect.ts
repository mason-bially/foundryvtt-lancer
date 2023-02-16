import { ActiveEffectDataConstructorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/activeEffectData";
import { EffectChangeData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/effectChangeData";
import { LancerActor } from "../actor/lancer-actor";
import {
  DamageTypeChecklist,
  DeployableType,
  EntryType,
  RangeTypeChecklist,
  WeaponSizeChecklist,
  WeaponTypeChecklist,
} from "../enums";
import { LancerItem, LancerMECH_WEAPON } from "../item/lancer-item";

// Chassis = mech or standard npc
export type LancerEffectTarget =
  | EntryType.PILOT
  | EntryType.MECH
  | EntryType.NPC
  | EntryType.DEPLOYABLE
  | "only_drone"
  | "only_deployable"
  | "mech_and_npc";

export interface LancerActiveEffectFlags {
  lancer: {
    // If true, then this is the effect innately generated by certain categories of items, such as frames, npc classes, etc
    // or an effect generated by the bonuses on such an item
    // These are aggressively regenerated. Do not become attached to them.
    ephemeral?: boolean;

    // If specified, disable unless this
    target_type?: LancerEffectTarget;

    // The actor (uuid) this was copied from, if applicable. Regardless of the true origin, this is the nearest ancestor
    passdown_parent?: string | null;
  };
}

export interface LancerActiveEffectConstructorData extends ActiveEffectDataConstructorData {
  flags: Record<string, unknown> & LancerActiveEffectFlags;
}

export class LancerActiveEffect extends ActiveEffect {
  get _typedFlags(): LancerActiveEffectFlags {
    // TODO :remove this when flags are properly represented on effects
    // @ts-expect-error
    return this.flags;
  }

  /**
   * Determine whether this Active Effect is suppressed or not.
   */
  get isSuppressed(): boolean {
    // Check it's not just passing through
    return !this.affectsUs();
  }

  /**
   * Determine whether this Active Effect is present only to be passed to descendants
   */
  affectsUs(): boolean {
    // Check right actor type
    let tf = this._typedFlags;
    if (this.parent instanceof LancerActor && tf?.lancer?.target_type) {
      switch (tf.lancer.target_type) {
        case EntryType.PILOT:
          return this.parent.is_pilot();
        case EntryType.MECH:
          return this.parent.is_mech();
        case EntryType.DEPLOYABLE:
          return this.parent.is_deployable();
        case EntryType.NPC:
          return this.parent.is_npc();
        case "mech_and_npc":
          return this.parent.is_mech() || this.parent.is_npc();
        case "only_deployable":
          return this.parent.is_deployable() && this.parent.system.type == DeployableType.Deployable;
        case "only_drone":
          return this.parent.is_deployable() && this.parent.system.type == DeployableType.Drone;
        default:
          return false;
      }
    }
    return true;
  }

  /* --------------------------------------------- */

  /**
   * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
   */
  static prepareActiveEffectCategories(
    actor: LancerActor
  ): Array<{ type: string; label: string; effects: LancerActiveEffect[] }> {
    // Define effect header categories
    let passives = {
      type: "passive",
      label: game.i18n.localize("lancer.effect.categories.passive"),
      effects: [] as LancerActiveEffect[],
    };
    let inherited = {
      type: "inherited",
      label: game.i18n.localize("lancer.effect.categories.inherited"),
      effects: [] as LancerActiveEffect[],
    };
    let disabled = {
      type: "disabled",
      label: game.i18n.localize("lancer.effect.categories.disabled"),
      effects: [] as LancerActiveEffect[],
    };
    let passthrough = {
      type: "passthrough",
      label: game.i18n.localize("lancer.effect.categories.passthrough"),
      effects: [] as LancerActiveEffect[],
    };

    // Iterate over active effects, classifying them into categories
    for (let e of actor.effects.contents as LancerActiveEffect[]) {
      // e._getSourceName(); // Trigger a lookup for the source name
      if (!e.affectsUs()) passthrough.effects.push(e);
      // @ts-expect-error
      else if (e.disabled) disabled.effects.push(e);
      else if (e._typedFlags.lancer?.passdown_parent) inherited.effects.push(e);
      else passives.effects.push(e);
    }

    // categories.suppressed.hidden = !categories.suppressed.effects.length;
    return [passives, inherited, disabled, passthrough];
  }
}

// To support more effects, we add several effect types.
export const AE_MODE_SET_JSON = 11 as any;
export const AE_MODE_APPEND_JSON = 12 as any;
const _json_cache = {} as Record<string, any>;
Hooks.on(
  "applyActiveEffect",
  function (actor: LancerActor, change: EffectChangeData, current: any, _delta: any, _changes: any) {
    if (change.mode == AE_MODE_SET_JSON || change.mode == AE_MODE_APPEND_JSON) {
      try {
        let parsed_delta = _json_cache[change.value] ?? JSON.parse(change.value);
        _json_cache[change.value] = parsed_delta;
        // Ok, now set it to wherever it was labeled
        if (change.mode == AE_MODE_SET_JSON) {
          foundry.utils.setProperty(actor, change.key, parsed_delta);
        } else if (change.mode == AE_MODE_APPEND_JSON) {
          foundry.utils.getProperty(actor, change.key).push(parsed_delta);
        }
      } catch (e) {
        // Nothing to do really, except log it
        console.warn(`JSON effect parse failed, ${change.value}`);
      }
    }
  }
);
