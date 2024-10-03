import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentPhotographerCreditSkeleton } from "./TypeComponentPhotographerCredit";
import type { TypeComponentPhotographyPlatformCreditSkeleton } from "./TypeComponentPhotographyPlatformCredit";

export interface TypeComponentRichImageFields {
    internalName: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    focusArea: EntryFieldTypes.Symbol<"Bottom Left" | "Bottom Right" | "Bottom" | "Center" | "Face" | "Faces" | "Left" | "Right" | "Top Left" | "Top Right" | "Top">;
    caption?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.Symbol;
    credits?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentPhotographerCreditSkeleton | TypeComponentPhotographyPlatformCreditSkeleton>>;
}

export type TypeComponentRichImageSkeleton = EntrySkeletonType<TypeComponentRichImageFields, "componentRichImage">;
export type TypeComponentRichImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentRichImageSkeleton, Modifiers, Locales>;
