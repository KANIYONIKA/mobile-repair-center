"use client";
import { motion, useReducedMotion } from "framer-motion";
import React, { ComponentPropsWithoutRef, createContext, useContext } from "react";

// 連動させてFadeInするかどうかのコンテキスト
const StaggerContext = createContext(false);

// スクロールに合わせて表示するためのViewportの設定
const viewport = { once: true, margin: "0px 0px -120px" };

// FadeInコンポーネント
export function FadeIn(props: ComponentPropsWithoutRef<typeof motion.div>) {
    // アニメーションを減らすかどうか
    const shouldReduceMotion = useReducedMotion();

    // 連動させてFadeInするかどうか
    const isStagger = useContext(StaggerContext);

    return (
        <motion.div
            // アニメーションの設定
            transition={{
                duration: 0.5,
            }}
            // アニメーションのバリエーション
            variants={{
                hidden: {
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 20,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            // 連動させせない場合は、初期状態をhiddenにして、スクロールに合わせて表示する
            {...(isStagger
                ? {}
                : {
                      initial: "hidden",
                      whileInView: "visible",
                      viewport,
                  })}
            {...props}
        />
    );
}
