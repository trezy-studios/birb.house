import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentPhotographerCreditFields {
    internalName: EntryFieldTypes.Symbol;
    photographerName?: EntryFieldTypes.Symbol;
    photographerUrl?: EntryFieldTypes.Symbol;
}

export type TypeComponentPhotographerCreditSkeleton = EntrySkeletonType<TypeComponentPhotographerCreditFields, "componentPhotographerCredit">;
export type TypeComponentPhotographerCredit<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentPhotographerCreditSkeleton, Modifiers, Locales>;
