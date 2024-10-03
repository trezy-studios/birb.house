const normalizeSrc = (src: string) => {
    return src.startsWith('/') ? src.slice(1) : src;
};

export default function cloudflareLoader({src, width, quality}) {
    if (process.env.NODE_ENV === 'development' ) {
        return `${src}?width=${width}`;
    }

    if (src.startsWith('http') || src.endsWith('.svg')) {
        return src;
    }
    const params: string[] = [`fit=scale-down,format=webp,width=${width}`];
    if (quality) {
        params.push(`quality=${quality}`);
    }
    const paramsString = params.join(',');
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};
