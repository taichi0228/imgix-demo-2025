// react-imgix.d.ts
declare module 'react-imgix' {
     import * as React from 'react';
   
     export interface ImgixProps {
       /** 画像のソース URL */
       src: string;
       /** 画像の幅（オプション） */
       width?: number;
       /** 画像の高さ（オプション） */
       height?: number;
       /**
        * 画像の alt 属性（オプション）
        */
       alt?: string;
       /**
        * 画像タグ（img）の HTML 属性を指定します。
        * 例: title など（altは直接指定できるようになりました）
        */
       htmlAttributes?: React.ImgHTMLAttributes<HTMLImageElement>;
       /**
        * imgix パラメータをオブジェクトで指定します。
        * 例: { auto: 'format,compress', crop: 'faces,edges' }
        */
       imgixParams?: { [key: string]: any };
       /** 追加のクラス名（Tailwind CSS など用） */
       className?: string;
     }
   
     const Imgix: React.FC<ImgixProps>;
     export default Imgix;
   }
   