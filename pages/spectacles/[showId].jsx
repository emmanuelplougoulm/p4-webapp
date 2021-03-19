import React, { useState, useEffect } from "react";
import styles from "../../styles/spectacles.module.scss";
import P4Banner from "../../components/P4Banner/P4Banner";
import ProjectsBanner from "../../components/ProjectBanner/ProjectBanner";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Spectacles = () => {
  const router = useRouter();
  const { showId } = router.query;

  return <div className={"site-wrapper"}>{showId}</div>;
};

export default Spectacles;
