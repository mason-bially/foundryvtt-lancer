// Import TypeScript modules
import { LANCER } from "../config";
import { LancerActor } from "../actor/lancer-actor";
import { renderTemplateStep } from "./_render";
import { Tag } from "../models/bits/tag";
import { LancerFlowState } from "./interfaces";
import { resolveItemOrActor } from "./util";

const lp = LANCER.log_prefix;

/**
 * Given basic information, prepares a generic text-only macro to display descriptions etc
 * @param actor Actor or actor uuid to roll the macro as
 * @param title Data path to title of the macro
 * @param text  Data path to text to be displayed by the macro
 * @param tags  Can optionally pass through an array of tags to be rendered
 */
export function prepareTextMacro(
  actor: string | LancerActor,
  title: string,
  text: string,
  tags?: Tag[]
): Promise<void> {
  let mData: LancerFlowState.TextRollData = {
    // docUUID: actor instanceof LancerActor ? actor.uuid : actor,
    title,
    description: text,
    tags: tags,
  };

  return rollTextMacro(mData);
}

/**
 * Given prepared data, handles rolling of a generic text-only macro to display descriptions etc.
 * @param data {LancerTextMacroData} Prepared macro data.
 */
export async function rollTextMacro(data: LancerFlowState.TextRollData) {
  // let { actor } = resolveItemOrActor(data.docUUID);
  let actor;
  if (!actor) return;

  const template = `systems/${game.system.id}/templates/chat/generic-card.hbs`;
  return renderTemplateStep(actor, template, data);
}