import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentAuthorSkeleton } from "./TypeComponentAuthor";
import type { TypeComponentRichImageSkeleton } from "./TypeComponentRichImage";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";

export interface TypePageBlogPostFields {
    internalName: EntryFieldTypes.Symbol;
    seoFields?: EntryFieldTypes.EntryLink<TypeComponentSeoSkeleton>;
    slug: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.EntryLink<TypeComponentAuthorSkeleton>;
    publishedDate: EntryFieldTypes.Date;
    title: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    relatedBlogPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>>;
    featuredImage: EntryFieldTypes.EntryLink<TypeComponentRichImageSkeleton>;
}

export type TypePageBlogPostSkeleton = EntrySkeletonType<TypePageBlogPostFields, "pageBlogPost">;
export type TypePageBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageBlogPostSkeleton, Modifiers, Locales>;
