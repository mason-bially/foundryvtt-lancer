import { LANCER } from "./config";

import type { LiveEntryTypes, OpCtx, RegEntry, RegRef } from "machine-mind";
import { EntryType } from "machine-mind";
import { FoundryReg, FoundryRegName } from "./mm-util/foundry-reg";
import { FetcherCache, get_pack_id, mm_wrap_actor, mm_wrap_item } from "./mm-util/helpers";
import { is_ref, safe_json_parse } from "./helpers/commons";
import { recreate_ref_from_element } from "./helpers/refs";
import { LancerActor } from "./actor/lancer-actor";
import { LancerItem } from "./item/lancer-item";


interface DerivedProperties<T extends EntryType> {
  // These are all derived and populated by MM

  mm: LiveEntryTypes<T> | null;
  mm_promise: Promise<LiveEntryTypes<T>>;
}


declare global {
  interface DocumentClassConfig {
    ActiveEffect: typeof LancerActiveEffect;
  }
}

declare type LancerActiveEffectCategories = {
  status: LancerActiveEffect[],
  conditions: LancerActiveEffect[],
  temporary: LancerActiveEffect[],
  passive: LancerActiveEffect[],
  metadata: LancerActiveEffect[]
};

export enum LancerActiveEffectKind {
  Status = "Status",
  Condition = "Condition",
  Metadata = "Metadata",
  TemporaryEffect = "TemporaryEffect", // e.g. an activated effect from a friendly or enemy or self item
  PassiveEffect = "PassiveEffect", // e.g. a persistent effect caused by equipment
}

/**
 * Extend the base ActiveEffect class to implement system-specific logic.
 * @extends {ActiveEffect}
 */
 export class LancerActiveEffect extends ActiveEffect {

  /**
   * The kind of effect
   *    by default assume metadata which is the "generic" tag that doesn't do anything by default
   */
  public kind: LancerActiveEffectKind = LancerActiveEffectKind.Metadata;

  /**
   * expose "old style" status id flag
   */
  public get statusId(): string | undefined {
    return this.getFlag("core", "statusId");
  }

  public get isPermanent(): Boolean {
    return this.kind == LancerActiveEffectKind.Metadata
      || (this.kind == LancerActiveEffectKind.PassiveEffect && this.sourceName != "")
  }

  /** @override
   * We want to reset our ctx before this. It is used by our items, such that they all can share
   * the same ctx space.
   */
  override prepareData() {
    super.prepareData();

    // If no id, leave
    if (!this.id) return;

    this._getSourceName(); // Trigger a lookup for the source name
    const statusId = this.statusId;

    this.kind = LancerActiveEffectKind.Metadata;
    if (this.parent instanceof LancerActor) {
      
    } else if (this.parent instanceof LancerItem) {

    }

    console.log(this);
    this.data
  }

  /** @override
   * Want to destroy derived data before passing it to an update
   */
   async update(data: any, options = {}) {
    if (data?.data?.derived) {
      delete data.data.derived;
    }
    return super.update(data, options);
  }

  /* --------------------------------------------- */

  /**
   * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
   * @param {ActiveEffect[]} effects    The array of Active Effect instances to prepare sheet data for
   * @returns {ActiveEffectCategories}  Data for rendering
   */
  static prepareActiveEffectCategories(effects: LancerActiveEffect[]): LancerActiveEffectCategories {
    // Define effect header categories
    const categories: LancerActiveEffectCategories = {
      status: [],
      conditions: [],
      temporary: [],
      passive: [],
      metadata: [],
    };

    // Iterate over active effects, classifying them into categories
    for (let e of effects) {
      switch(e.kind) {
        case LancerActiveEffectKind.Status: categories.status.push(e); break;
        case LancerActiveEffectKind.Condition: categories.conditions.push(e); break;
        case LancerActiveEffectKind.TemporaryEffect: categories.temporary.push(e); break;
        case LancerActiveEffectKind.PassiveEffect: categories.passive.push(e); break;
        case LancerActiveEffectKind.Metadata: categories.metadata.push(e); break;
      }
    }

    return categories;
  }

  /* --------------------------------------------- */

  macroRemove() {
    // Just do it?
    if (game.user?.isGM) {

    } else {

    }
  }
}
