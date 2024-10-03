import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentPhotographyPlatformCreditFields {
    internalName: EntryFieldTypes.Symbol;
    platformName?: EntryFieldTypes.Symbol;
    platformUrl?: EntryFieldTypes.Symbol;
}

export type TypeComponentPhotographyPlatformCreditSkeleton = EntrySkeletonType<TypeComponentPhotographyPlatformCreditFields, "componentPhotographyPlatformCredit">;
export type TypeComponentPhotographyPlatformCredit<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentPhotographyPlatformCreditSkeleton, Modifiers, Locales>;
