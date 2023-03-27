/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Post } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostCardOverridesProps = {
    PostCard?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    TitleContent?: PrimitiveOverrideProps<FlexProps>;
    "This is the title of this post"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Frame36582731?: PrimitiveOverrideProps<FlexProps>;
    Frame36582732?: PrimitiveOverrideProps<FlexProps>;
    Frame36582733?: PrimitiveOverrideProps<FlexProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Actions?: PrimitiveOverrideProps<FlexProps>;
    Button36662891?: PrimitiveOverrideProps<ButtonProps>;
    Button36852910?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PostCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    post?: Post;
} & {
    overrides?: PostCardOverridesProps | undefined | null;
}>;
export default function PostCard(props: PostCardProps): React.ReactElement;
