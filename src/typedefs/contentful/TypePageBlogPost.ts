import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentAuthorSkeleton } from "./TypeComponentAuthor";
import type { TypeComponentRichImageSkeleton } from "./TypeComponentRichImage";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";

export interface TypePageBlogPostFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    publishedDate: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    author?: EntryFieldTypes.EntryLink<TypeComponentAuthorSkeleton>;
    featuredImage: EntryFieldTypes.EntryLink<TypeComponentRichImageSkeleton>;
    seoFields?: EntryFieldTypes.EntryLink<TypeComponentSeoSkeleton>;
    relatedBlogPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>>;
}

export type TypePageBlogPostSkeleton = EntrySkeletonType<TypePageBlogPostFields, "pageBlogPost">;
export type TypePageBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageBlogPostSkeleton, Modifiers, Locales>;
