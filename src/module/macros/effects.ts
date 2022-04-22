/*      effects.ts

    This file provides macros and macro support for various effects within the lancer system.

    This terminology on this topic is complicated.

    The LANCER rule book (pg.77) says the following

    > During combat, characters often inflict and receive
      statuses (like PRONE or SHUT DOWN) and conditions (like
      STUNNED). Conditions are temporary effects caused by
      things like damage and electronic warfare, whereas
      statuses are usually effects that can’t easily be cleared.

    Further, various systems, tech attacks and weapons within the lancer rule book refer to "this
    effect". This causes there to be three official terms we will use "Effect", "Status" and
    "Condition". This also agrees with the nomenclature of the LCP format.

    Foundry has things called ActiveEffects which directly describe Effects as they are in Lancer.
    To support Conditions and Statuses we will have to somewhat abuse this interface.
*/

import { LANCER } from "../config";

const lp = LANCER.log_prefix;
