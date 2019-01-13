export interface IGuideParagraph {
    type: 'paragraph',
    text: string;
}

export interface IGuideCode {
    type: 'code',
    text: string;
}

export interface IGuideHeading {
    type: 'heading',
    text: string;
}


export type IGuideItem = IGuideParagraph | IGuideCode | IGuideHeading;

export interface IGuide {
    id: string;
    name: string;
    description: string;
    items: IGuideItem[];
}