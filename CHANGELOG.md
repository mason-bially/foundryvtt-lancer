# 1.2.0 (2022-04-19)
## Features
* Update the pilot import system to use Comp/Con's new share code system. "Vault" and "cloud" style codes are no longer supported.
* Update Lancer Initiative to take advantage of Foundry v9 features, eliminating the "Dummy Combatant".
* Added Custom Paint Job macro from \[REDACTED\] to the Macros compendium.
* Added Scan macro from Jazzy (and speck and Valkyrion) to the Macros compendium.
* Added Mimic Gun macro from Infalle to the Macros compendium.

## Bug Fixes
* #249 - Imported Mechs with multiple copies of weapons/systems now create unique instances of each.
* #391 - Selecting "clear burn" in the Stabilize macro now automatically clears burn on the actor.
* #392 - Structure/Stress macro no longer locks up when run manually on an actor with 0 remaining.
* Full Repair macro now clears conditions, burn, and overshield.
* Condition renamed from "SLOW" to "SLOWED" to match the core rulebook. CUB-users will need to update their conditions to match.

# 1.1.0 (2022-01-25)
## Features
* #378 - Full compatibility with Foundry v9.
* #5 - Lancer Initiative has been rolled into the system, so it no longer needs to be installed separately!
* #62, #129 - Added generic tech attack roller to NPC sheets.
* #70 - Integrated weapon and system details are now shown on mech frame item sheets.
* #228 - Remaining generic item reference boxes have been replaced with more informative cards on all sheets.
* Added more information on weapon mod previews. They should be more useful now!
* Added a setting under system automation for limited systems uses tracking.
* Improved tracking for limited systems uses in several areas.
* Improved tracking and editing for counters in several areas.
* Added chat macro for frame traits.

## Bug Fixes
* #313 - Fix issue causing duplicate weapon tags on LCP import.
* #335 - Fix issue causing custom-selected token art to be overwritten during sync.
* #346, #362 - Edit locations for effect, on-hit, on-attack, and on-crit added to mech weapon sheet.
* #353 - NPC weapons now correctly apply self heat.
* #354 - NPC basic attacks now correctly use tier as attack bonus.
* #363 - Mech weapon sheet loading tracking is now functional.
* #367 - NPC feature drag and drop functions are repaired on NPC actor sheet and NPC class & template sheets.
* #368 - Overcharge counter is now reset by the full repair macro.
* #381 - Fix issue causing NPC tech attacks to not initialize the attack roller with their innate accuracy.
* #387 - Core systems on mech sheets show actions.
* #389 - Fix issue causing non-roll macros to always be whispered to GM.
* Fix missing Blast 1 macro in AOE Templates compendium.
* Several error messages now provide more useful information.
* Overheat automation now correctly states that single-stress actors are exposed, instead of stating they melt down.

# 1.0.3 (2021-09-22)
## Features
* Reorganized system automation settings into their own sub-menu.
* Structure/stress macros now use a HUD similar to attacks, improved logic, and automatically trigger (unless disabled via automation settings) when hp <= 0 and heat > max.
* #229 - Weapons with the self heat tag now apply heat to the owner when used.
* Add context menus to item preview cards with options to edit, remove, and mark as destroyed/repaired. Replaces the static delete buttons and "click *almost* anywhere to open the item" functionality.

## Bug Fixes
* #309 - Adding Fomorian Frame to size 1/2 mechs correctly sets size to 1 instead of 1.5.
* #334 - Fix a local caching issue when retrieving pilot data from Comp/Con vaults.
* Fix file pickers for actor images rendering behind actor sheets instead of in front.
* Fix token bars not rendering in Foundry v9.
* Fix NPC recharge macro sometimes not firing at start of turn.

# 1.0.2 (2021-09-08)
## Features
* #120 - Mechs and NPCs which do not have custom artwork set will now use a set of defaults from [Retrograde Minis](https://www.retrogrademinis.com). Thanks a ton to Retrograde for letting us use their fantastic artwork!
* #122 - Changing the size of Mech and NPC Actors will set the appropriate square token size and Hex Size Support configuration, if that module is installed and enabled.
* #178 - Add handling for "overcharge" bonuses on pilot & mech items. Heatfall CB (and any homebrew LCPs that affect overcharge) now correctly modify the overcharge roll sequence.
* #292 - Add active mech management to pilot sheet, including list of inactive mechs.
* The Pilot sheet has been reorganized to be more similar to Comp/Con. The NARRATIVE tab now contains pilot-centric data (LL, grit, skill triggers, and pilot gear), and the TACTICAL tab contains things which affect mechs (Counters, HASE, Talents, Licenses, Core Bonuses).

## Bug Fixes
* #298 - Fixed remaining cases where macros rolled from an unlinked token's sheet did not use that token's state for the roll.
* #300 - Fix CORS issues with default token images by packaging defaults (Retrograde artwork) within the system.
* #301 - Fix issue causing imported mechs' tokens to default to unlinked and hostile.
* #310 - Fix issue erroneously preventing macros from linked mech/pilot token sheets.
* Fix issue preventing use of talent rank macros from mech sheet. 
* Fix issue causing irregularities with Sensor Sight token detection radius.
* Fix issue preventing display of size 1/2 icon on various sheets.
* Crit damage rolls now comply with Lancer RAW procedure, re-using the normal damage roll results.

# 1.0.1 (2021-09-02)
## Features
* Bolts has added a button to the attack HUD for placing templates according to the weapon's profile! Tokens under the template will be automatically targeted, updating the attack HUD.
* The AoE Macros compendium has been updated so that the templates automatically target tokens they are placed upon.

## Bug Fixes
* #297 - Impaired is now applied to tech attacks as well.
* #298 - Macros rolled from an unlinked token's sheet will use that token's name in chat.
* #299 - Invisibility applies before any other attack modifiers, and spotter now correctly rerolls the entire attack roll.
* #307 - Fixed talent action macros on mech sheets.

# 1.0.0 (2021-08-31)
If you are coming here from Lancer v0.1.x / Foundry 0.7.x, welcome! For you, nearly everything is new; the changes listed below accounts for changes from the latest version of the beta release.

## Features
* The accuracy/difficulty prompt has been completely revamped as an attack prompt and a check prompt, thanks to sohum! The new version is more informative and responsive, allows setting acc/diff individually on multi-target attacks, and automatically adjusts based on the Impaired status on the attacker and Lock On status on the target.
* The template macros in the AoE Macros compendium have been repaired and updated, thanks to Bolts! For now, there are no user-visible changes, but the groundwork is laid for integrating them with the new attack prompt, including automatic targeting of tokens under the laid template. 

## Bug Fixes
* #233 - We no longer override the token data on new Actors, allowing the Foundry configuration for default settings to work as expected.
* #260 - Dice So Nice (and other modules that trigger on dice rolls) will once again trigger on skill check rolls.
* #262 - Importing an Actor from a compendium no longer overwrites the imported data with defaults.
* #271 - Actor attribute names have been standardized. Pilots now have burn and overshield, and the unnecessary `current_` prefix on many attributes have been removed.
* #276 - Fix a small formatting issue on the secondary roll button in structure/stress chat messages.
* #278 - Add capability to rename and delete weapon profiles via right click menu.
* #280 - Show talent actions alongside talents in pilot/mech sheets.
* #288 - Remove an unnecessary warning displayed during structure/stress macros.
* #293 - Fix the action editor.

# 0.9.6 (2021-08-10)
## Features
* #128 - Better COMP/CON Sync UI 

## Bug Fixes
* #222 - Better readiness trackers
* #252 - Calculate overkill correctly
* #261 - Fix structure/stress macros
* Add a minimum height to the tags section non-tagged items can be dropped on
* Fix action trackers
* Fix token attributes for HP and Heat
* Import pilot and mech images
* Re-add the core passive macro

## Bug Fixes
* #222 - Better readiness trackers
* #252 - Calculate overkill correctly
* #261 - Fix structure/stress macros
* Add a minimum height to the tags section non-tagged items can be dropped on
* Fix action trackers
* Fix token attributes for HP and Heat
* Import pilot and mech images
* Re-add the core passive macro

# 0.9.5 (2021-07-11)
## Features
* #235 - Importing Status & Conditions compendium now
* #70 - Partially resolved, will show the _first_ integrated weapon on the sheet
* #176 - Better item sorting
* Superheavies can now be braced
* Can now track your inventory to see what you don't have equipped!
* Initial localization work--while we still only have English, any volunteer translators can begin translating to other languages!

## Bug Fixes
* #174 - Should now remove NPC Features on Class removal in all cases
* #234 - NPC Notes are now saved
* #231 - Tweak roll display for better usability
* #230 - Can now roll Loading weapons
* #226 - Template Macros fixed
* #236 - Can now use Talent sheets
* #243 - Temporary fix for wobbling text

# 0.9.4 (2021-06-16)
## Features
* #174 - NPCs now tie into their classes more closely, removing Features as Classes are removed
* #132 - Structure and Stress rolls now prompt in chat for sub-rolls
* More robust drag & dropping everywhere!
* Simple COMP/CON Vault importing has been implemented. A more robust/prettier version to come!
* Compatible with 0.8.7
* Derive Speed for use with Drag Ruler or other modules

## Bug Fixes
* #110 - NPC Classes now fully support feature adding/removal
* #207 - License Preview now opens license sheet on click
* #210 - Tokens now let you edit HP/Heat again!
* #211 - Crits don't double flat values anymore
* #212 - Overkill heat applied again
* #213 - Applying conditions no longer reset token HP values
* #214 - Can now overcharge again
* #215 - Custom counters now allow greater control
* #217 - Can drag & drop NPC features from compendiums onto sheets again
* #219 - Can safely import items and actors from compendiums again
* #221 - NPC Templates add Structure/Stress again


# 0.9.3 (2021-06-02)
## Features
* Now supporting FoundryVTT version v0.8!
* Improved action manager

## Bug Fixes
* #199 - Better NPC Feature Sizing
* #197 - Allow rolling of weapons without damage
* #195 - Fixes to the action tracker
* #187 - Allow for user-breaking of systems
* #185 - UI for limited weapons
* #180 - Better mount selection
* #179 - Can alter license ranks
* #175 - Can add NPC Features to tokens
* #173 - Grit rolls for mechs and NPC rank rolls for NPCs
* #172 - Better roll logic, especially for crits
* #166, #62 - Fix NPC Tech actions
* #163 - Active mech loadout

# 0.9.2 (2021-05-08)
## Features
* **Player Charges**: Add support for LIMITED, LOADING, and USES tags for systems and some weapons. This allows for proper tracking of resources on actor sheets, and if combat automation is enabled in the settings, then this will also tie into the combat roll workflow (Unloaded weapons can't be fired, etc.).
* **NPC Charges**: Add NPC sheet support uses and RECHARGE abilities. If combat automation is enabled, at the start of an NPC turn a Recharge roll will be made and report which systems made the roll, and automatically charge them.
* **Weapon Profiles**: Add profiles to weapons in tabs.
* **Action Manager**: First draft of the action manager. While controlling a token, a (movable) HUD will appear. If you've used Comp/Con's active mode, this will be very similar to the action bar at the bottom right. Currently actions need to be manually spent for actions (When done moving, click the move action button, etc.). The core workflows of the action system is there:
  * When starting a turn, a token's actions are refreshed.
  * When ending a turn, all remaining actions are wasted (minus Reaction, which is immediately refreshed at every turn).
  * When spending a Quick action and a Full action is available, the Full action is spent instead (represents the 2 Quick = 1 Full conversion).
* **Action Editing**: First draft of action editing on all manner of items, first step towards homebrew and ease-of-use UX.
* (0.9.1 but not documented) Right clicking weapon icons will toggle destroyed state. This will eventually be folded into a proper context menu.

## Bug Fixes
* Fixes for NPC tech and attack macros.
* Fixes for attack card.
* Fixes for FLEX mounts showing extra possible slots in some situations.
* #183 - NPC sheet path fixes.
* Lots of refinement and styling fixes.
* Fixes for drag drop and previews.

# 0.9.1 (2021-04-30)
## Features
* **Attacks**: Now auto-calculates if a targeted attack hits.
* **Macros**: #145 Added Stabilize and Full Repair Macros

## Bug Fixes
* #147 - Correctly calculates Max Uses of a system
* #154 - Fixed weapon data being pulled in incorrectly
* #156 - Structure/Stress Rolling again
* #157 - NPCs can now roll again
* Added HASE buttons to NPCs
* NPC Classes now show more data
* #161 - Macros now support the proper chat privacy selection

# 0.9.0 (2021-04-22)
## Features
System completely rebuilt from the ground up to support the new COMP/CON data structure!

# 0.1.21 (2021-08-18)
* **Version Warning**: Add a warning when run on Foundry 0.8.x stating incompatibility and what options are available.
* **Mech Sheet**: Fix for missing core power icon.

# 0.1.20 (2021-01-20)
## Features
* **Macros**: Add automatic crit damage handling. Thanks, descention!
* **Macros**: Add item and actor IDs to attack cards to increase module support. Thanks, kreisl!

## Bug Fixes
* **NPC Sheet**: Updating an NPC's embedded class also updates the NPC's stats. Closes #127.

# 0.1.19 (2020-12-17)
## Features
* **Macros**: Add options object for attack macros to specify static attack bonus and bonus damage. Partial for #117.

## Bug Fixes
* **Macros**: Fix a bug with structure/overheat macros that displayed the wrong result when multiple 1's are rolled.
* **NPC Sheet**: Fix a bug preventing NPC features from being deleted. Closes #123.

# 0.1.18 (2020-12-15)
## Bug Fixes
* **Macros**: Fix a bug with the structure/overheat macros that decide to declare your mech destroyed if structure/stress are full.

# 0.1.17 (2020-12-15)
## Features
* **Macros**: Structure and Overheat macros have been added. They can be found in the "LANCER Macros" Compendium, and their functionality can be customized using the system settings. Closes #91.
* **Macros**: Macros for placing common AOE templates have been added. They can be found in the "AoE Templates" Compendium.
* **NPC Classes**: Add functionality to NPC Class sheet allowing features from Compendium to be added. Partial for #110.

## Bug Fixes
* **NPCs**: Don't override NPC stat values when duplicating NPCs. Closes #94.
* **Pilot/NPC Sheet**: Fix a bug which overwrites prototype token name even if the Actor's name was not edited. Closes #116.
* **Item Sheets**: Fix some inconsistencies in how range and damage selectors were handled, which caused charge-type systems in particular to lose data when saved. Closes #116.
* **Macros**: Fix and improve Overkill handling for attack macros. 

# 0.1.16 (2020-11-25)
## Bug Fixes
* **Pilot Sheet**: Syncing Comp/Con cloud saves no longer fails with a 401 error. Closes #113. Again.
* **Pilot Sheet**: Fix an issue where some synced pilots caused the pilot sheet to not render after syncing. Closes #115.
* **Macros**: Pilot skill trigger and overcharge macros rolled from the sheet no longer fail if no token is selected.

# 0.1.15 (2020-11-22)
## Features
* **Pilot Sheet**: Syncing Comp/Con cloud saves now sets up mounts and adds weapons to them. Closes #75.

## Bug Fixes
* **Pilot Sheet**: Syncing Comp/Con cloud saves no longer fails with a 401 error. Closes #113.
* **Macros**: Using a macro from the hotbar no longer fails if no token is selected.

# 0.1.14 (2020-11-19)
## Features
* **Pilot Sheet**: Added Overcharge macro. Closes #101.
* **Status Icons**: Added NPC tier icons. Partial work for #92.

## Bug Fixes
* **Compendium Manager**: Fix bug where item name was used instead of item ID when finding items to update from an LCP. Closes #108.
* **Pilot Sheet**: Don't add mech weapons when syncing a Comp/Con pilot.
* **Pilot Sheet**: Fix reversed current and max repairs when syncing a Comp/Con pilot. Closes #109.
* **Item Sheets**: Save new item name into system data so that item previews show the updated name. Closes #111.

# 0.1.13 (2020-11-08)
## Features
* **Pilot Sheet**: Added macros for pilot gear, core bonuses, core actives, and core passives. Closes #10.
* **Pilot Sheet**: Added basic Overcharge tracking. Partial solution for #101.
* **NPC Sheet**: Added macros for systems, traits, and reactions. Closes #10.
* **NPC Sheet**: Added a link beside the class name to open the NPC's class item.
* **NPC Class Sheet**: The Base and Optional Feature sections are now populated with previews of the features. The previews can be dragged onto NPC sheets to add the items to the NPC, without opening any Compendiums. Closes #106.
* **NPC Template Sheet**: Likewise populates the Base and Optional Feature sections with draggable feature previews. Closes #106.
* **Migration**: Migration logic is now more intelligent, avoiding unnecessary migrations each version update.

## Bug Fixes
* **Macros**: NPC Weapon "On Hit" effects now show in chat. Closes #95.
* **NPC Sheet**: Fix a issue causing NPC Templates to be un-deletable. Closes #97.
* **Status Icons**: Improved status icons to include tooltips in the token HUD. Closes #93.
* **General**: Fix an issue causing the system to fail to load on Foundry 0.7.6. Closes #107.

# 0.1.12 (2020-10-21)
## Bug Fixes
* **General**: Fix a bug where some parts of the system tried to load too soon and failed fatally.

# 0.1.11 (2020-10-21)
* **Foundry Core Support**: This update moves the supported Foundry core version to the 0.7 series.

# 0.1.10 (2020-10-11)
## Bug Fixes
* **Pilot Sheet**: Fix bug preventing superheavy weapons from being added to mounts. Closes #88.

# 0.1.9 (2020-10-11)
## Features
* **Pilot Sheet**: Added macros for sending Talents and Mech Systems to chat. Starts #10.
* **Hotbar**: Add drag-to-hotbar macro creation for several items on Pilot and NPC sheets. Closes #53.

## Bug Fixes
* **Pilot Sheet**: Fix bug preventing weapons from being added to Aux/Aux and Main/Aux mounts. Closes #83.
* **Pilot Sheet**: Fix bug causing weapons to become un-rollable after editing. Closes #86.
* **Pilot Sheet**: Fix bug causing History and Notes sections to flicker when hovering over edit button. Closes #87.
* **Status Icons**: Added white versions of status/condition icons for use on tokens.
* **Status Icons**: Fix an issue preventing status icons from being shown on Firefox.

# 0.1.8 (2020-10-04)
## Features
* **Everywhere**: Hide default increment/decrement arrows on number inputs, which were causing issues. Some number inputs now use new, larger increment/decrement buttons. Partial fix for #48.
* **Pilot Sheet**: Add a core power toggle. Closes #52.
* **Attack Macros**: Add single-depth Overkill rerolling, and a button to roll another d6 if needed.
* **Status Icons**: Add status and condition icons from Comp/Con icon set. Closes #24.

## Bug Fixes
* **Pilot Sheet**: Fixed an issue preventing Aux/Aux and Main/Aux mounts from being created. Closes #73.
* **Pilot Sheet**: Cloud import now properly sets the Actor name. Closes #79.
* **Pilot Sheet**: Fix drag-and-drop item sorting.
* **NPC Sheet**: Fixed a bug preventing NPC HASE macros from rolling. Closes #76.
* **Compendiums**: Fixed a bug causing modified items in the Lancer compendiums to prevent the system from loading properly. Closes #78.
* **Compendium Manager**: Removed the setting to create system-wide compendiums, which caused issues with pilot imports. Closes #80.

# 0.1.7 (2020-09-27)
Hotfix to correct new issue with pilot sheet not loading. 

# 0.1.6 (2020-09-27)
## General
* **Pilot Sheet**: Move the cloud sync tab to leftmost, rename to "RM-4://SYNC" to mirror Comp/Con UI.
* **Pilot Sheet**: Record and display the last time the pilot was downloaded from cloud save.

## Bug Fixes
* **Pilot Sheet**: Fix bug where charge effects' HTML wasn't closed properly, resulting in the cloud import UI elements not showing on affected pilot sheets. Closes #72.
* **Comp/Con Cloud Save Import**: Fix bug where pilots with custom skills would not import. Closes #71.

# 0.1.5 (2020-09-27)
## Features
* **LCP Import**: It's finally here! The Lancer Compendium Manager is your new friend for building/updating Compendiums with Lancer core data and LCPs. Closes #15.
* **Comp/Con Cloud Save Import**: Pilots can now pull data from a Comp/Con cloud share code, automatically building the pilot and their mech (except for weapons) and calculating stats. Partial work for #23.

## Bug Fixes
* **NPC Sheet**: Fix bug where ranges weren't shown on NPC weapon previews. Closes #68.

# 0.1.4 (2020-09-12)
## Bug Fixes
* **NPC Feature Sheet:** Fix bug where new NPC weapons only show 1 damage field. Closes #64.
* **Item Import/Duplication:** Fix issue where duplicated/imported items had properties overwritten. Closes #65.

# 0.1.3 (2020-09-07)
## General
* Updated Foundry Core compatibility version to 0.6.6.
* Standardized a lot of sheet components to make appearance and future development better.
* Changed default grid distance and unit to 1 unitless, instead of 10 feet.
* Greatly reduced the file size of the faction logos.

## Features
* **Mech Systems/Weapons:** Added effects rendering for all effect types currently supported in Comp/Con. They are rendered on pilot sheet and in chat when a weapon macro is used. Closes #22.
* **Mech Systems:** Added editability for Basic, AI, Bonus, and Charge-type effects. 
* **Frame Sheet:** Improve appearance and editability of Frame sheet. Core system description, passive effect, and active effect can now all be edited even if not currently present on the Frame.

## Bug Fixes
* **Pilot Sheet:** Fixed custom frames (user-created Item) not showing their name on pilot sheets. Closes #57.
* **Usability:** Removed functionality which deleted weapons or systems from a Pilot on right-click. Closes #56.
* **Tokens:** Fixed a bug which caused NPC and Deployable prototype token images to be overwritten when the parent sheet image was changed. Closes #61.
* **Macros:** Character sheet macro rollers now always use the sheet's Actor as the speaker.

# 0.1.2 (2020-07-29)
## Bug Fixes
* **General:** Fix a bug which could cause Item data to be lost during version migration or duplication.
* **NPC Sheet:** Editing the name field now renames the Actor and prototype token, closes #55.

# 0.1.1 (2020-07-26)
## Bug Fixes
* **Macros:** Add "Cancel" button to accuracy prompt. Clicking cancel or closing the prompt will abort the roll. Closes #45.
* **Macros:** Fix NPC weapon macros, closes #47.
* **Frame sheet:** Fixed adding traits and mounts, closes #44. (Thanks, Grygon!)
* **NPCs:** New NPCs start at 0 heat, closes #49.
* **NPCs:** Increase NPC class sheet default width, part of #48.

## Features
* **Macros:** Add HASE macro buttons to mech tab of pilot sheet, closes #54.
* **Macros:** Add NPC tech attack macros.
* **Pilot sheet:** Render charge effects in systems previews, closes #46. (Thanks, Grygon!)
* **Frame sheet:** Improve core system editability.
* **NPC Features:** Add support for all feature types to feature sheet and NPC sheet, closes #36. 

# 0.1.0 (2020-07-19)
## Alpha release!
A huge thank you and shout-out to Animu36, Grygon, and Staubz, without whose help this initial release would have taken many more weeks!

The system is bare-bones, but should be stable for play. Features existing as of this release:
* Compendiums containing all of the Core Book player-side content.
* Pilot sheet with sorted Items, mount handling (thanks, Animu!), support for frame swapping by drag-and-drop, and some macro buttons.
* NPC sheet with support for class swapping by drag-and-drop (thanks, Staubz!), and some macro buttons.
* Editable sheets for each Item type (thanks, Grygon!):
  * Skill Triggers
  * Talents
  * Core Bonuses
  * Pilot Armor, Weapons, and Gear
  * Mech Frames
  * Mech Weapons
  * Mech Systems
  * NPC Classes
  * NPC Templates
  * NPC Features

## Recommended Companion Modules
* Lancer Condition Icons - status/condition icon sets tailored towards Lancer.
* Hex Size Support - Improves Hex grid snapping, movement, and ruler measurement for hex tokens larger than size 1.
* Popcorn Initiative - Add-on popcorn initiative management system.

## Known Issues
* Weapons, systems, and NPC features do not render all of their effects yet. Since the Compendiums are generated using `lancer-data` (the same data library that Comp/Con uses), the effects are broken down into the special types that Comp/Con supports. Implementing proper rendering and then editability for special effects types will be added soon. This may be delayed until the recently announced changes to the data are complete on the Comp/Con side.
* No NPCs included! As the Core Book NPCs are part of the paid content for Lancer, they cannot be included in the system upon install. An LCP import tool is coming, which will allow you to use the Comp/Con NPC pack (download from the [Core Book itch.io page](https://massif-press.itch.io/corebook-pdf)) to automatically build/update NPC Compendiums. For now, NPC stats will need to be entered manually.
* Does not include [Long Rim](https://massif-press.itch.io/the-long-rim) or Wallflower player content. Again, LCP import is coming!
