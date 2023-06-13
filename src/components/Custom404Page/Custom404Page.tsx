import React from "react";
import { useRouter } from "next/router";
import styles from './Custom404Page.module.scss';
import ru from "@/locales/titles/ru";
import en from "@/locales/titles/en";

export default function Custom404Page() {

  const { locale } = useRouter();
  const t = locale === 'ru' ? ru : en

  return (

    <div className="container">
      <div className={styles.error}>
        404 - {t.notFound}
      </div>
    </div>

  );
};
