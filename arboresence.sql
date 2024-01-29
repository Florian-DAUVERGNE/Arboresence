-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : database
-- Généré le : lun. 29 jan. 2024 à 13:10
-- Version du serveur : 8.0.33
-- Version de PHP : 8.1.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `arboresence`
--

-- --------------------------------------------------------

--
-- Structure de la table `fichiers`
--

CREATE TABLE `fichiers` (
  `id` int NOT NULL,
  `path` text NOT NULL,
  `extension` tinytext NOT NULL,
  `taille` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `fichiers`
--

INSERT INTO `fichiers` (`id`, `path`, `extension`, `taille`) VALUES
(283, 'Mon fichier test/Mon fichier test/Fichier.txt', '.txt', 17),
(284, 'Mon fichier test/Mon fichier test/FlowerDetector(1).pdf', '.pdf', 3794054),
(285, 'Mon fichier test/Mon fichier test/monSite/SSD.jpg', '.jpg', 78427),
(286, 'Mon fichier test/Mon fichier test/monSite/index.html', '.html', 213),
(287, 'Mon fichier test/Mon fichier test/Fichier.txt', '.txt', 17),
(288, 'Mon fichier test/Mon fichier test/FlowerDetector(1).pdf', '.pdf', 3794054),
(289, 'Mon fichier test/Mon fichier test/monSite/SSD.jpg', '.jpg', 78427),
(290, 'Mon fichier test/Mon fichier test/monSite/index.html', '.html', 213);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `fichiers`
--
ALTER TABLE `fichiers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `fichiers`
--
ALTER TABLE `fichiers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=291;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
