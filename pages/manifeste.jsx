import React, { useEffect, useState } from "react";
import styles from "../styles/actus.module.scss";
import Link from "next/link";
import P4Banner from "../components/P4Banner/P4Banner";
import Image from "next/legacy/image";
import HttpClient from "../http/httpClient";

const Manifeste = () => {
  return (
    <div className={"manifeste"}>
      P4 pour un paquet de quatre cigarettes, pour un laboratoire de recherche
      de haute sécurité, pour une incompatibilité avec la poursuite du service
      militaire ou un véhicule léger. Le collectif P4 fait du théâtre, en salle
      et ailleurs, et pour tout le monde. P4 croit en l'esprit de camaraderie et
      à la confrontation d'idées. P4 écrit des spectacles pour la salle et pour
      les lieux qui l'invite durant des temps de résidences courts. P4 veut
      seulement raconter des histoires, hors des sentiers rebattus, avec sa
      générosité et son appétit pour le jeu.
      <br /> <br /> "Le fossé entre le théâtre pauvre et le théâtre riche est
      encore élargi, la classe moyenne du théâtre disparaît, un peu d’argent ne
      suffit plus, il en faut beaucoup ou alors, quoi, rien. Il faut trouver
      l’esthétique de ce rien. Qui n’est pas du tout rien, puisqu’il y a les
      acteurs, porteurs de la totalité des signes du spectacle".
      <br />
      <br />
      A.Vittez
    </div>
  );
};

export default Manifeste;
