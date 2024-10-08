import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGameFields {
    name: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    logo: EntryFieldTypes.AssetLink;
    heroImage?: EntryFieldTypes.AssetLink;
    websiteURL?: EntryFieldTypes.Symbol;
    steamURL?: EntryFieldTypes.Symbol;
    epicGamesURL?: EntryFieldTypes.Symbol;
    gogURL?: EntryFieldTypes.Symbol;
    humbleBundleURL?: EntryFieldTypes.Symbol;
    itchURL?: EntryFieldTypes.Symbol;
    textColor: EntryFieldTypes.Symbol;
    backgroundColor: EntryFieldTypes.Symbol;
    playMode: EntryFieldTypes.Symbol<"CoOp" | "MultiPlayer" | "SinglePlayer">;
    numberOfPlayers?: EntryFieldTypes.Integer;
    platforms?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Android" | "Linux" | "Nintendo Switch" | "Playstation 5" | "Windows" | "Xbox One" | "iOS" | "macOS" | "tvOS">>;
    copyrightYear?: EntryFieldTypes.Integer;
    status?: EntryFieldTypes.Symbol<"Early Access" | "In Development" | "Open Beta" | "Released">;
    isFamilyFriendly?: EntryFieldTypes.Boolean;
}

export type TypeGameSkeleton = EntrySkeletonType<TypeGameFields, "game">;
export type TypeGame<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGameSkeleton, Modifiers, Locales>;
