export interface Response {
    dates: Dates;
    page: number;
    results: Movies[];
    total_pages: number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Th = "th",
    Zh = "zh",
}
