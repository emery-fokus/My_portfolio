import thumbLivreur from '../assets/projects/thumb-livreur.jpg'
import thumbEcommerce from '../assets/projects/thumb-ecommerce.jpg'
import thumbAmazon from '../assets/projects/thumb-amazon.jpg'
import thumbAvisAmazon from '../assets/projects/thumb-avis-amazon.jpg'
import thumbArkose from '../assets/projects/thumb-arkose.jpg'
import thumbStoryMint from '../assets/projects/thumb-storymint.jpg'
import detailLivreur1 from '../assets/projects/detail-livreur-1.png'
import detailEcommerce1 from '../assets/projects/detail-ecommerce-1.png'
import detailAvisAmazon1 from '../assets/projects/detail-avis-amazon-1.png'
import detailAvisAmazon2 from '../assets/projects/detail-avis-amazon-2.png'

export type Category = 'PBI' | 'PY' | 'WEB'

export const CATEGORY_LABELS: Record<Category, string> = {
  PBI: 'Power BI',
  PY: 'Python',
  WEB: 'Django / Web',
}

export interface Project {
  slug: string
  title: string
  category: Category
  summary: string
  description: string
  tools: string[]
  keyResults: string[]
  thumbnail: string
  images: string[]
  projectUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'generateur-dhistoires-multimedia-mistral-grok',
    title: 'Générateur d’histoires multimédia – Mistral & Grok',
    category: 'PY',
    summary:
      'Application Streamlit permettant de générer une histoire, une image et un audio à partir d’un mot-clé grâce aux API Mistral et Grok.',
    description: `Ce projet est une application Streamlit qui génère automatiquement une histoire, une image et un fichier audio à partir d'un mot-clé fourni par l'utilisateur.

L'application combine plusieurs technologies :
– Mistral AI pour la génération de texte
– Grok (xAI) pour la génération d'images
– gTTS pour la synthèse vocale
– Streamlit pour l'interface utilisateur`,
    tools: ['Python', 'Streamlit', 'Mistral API', 'Grok API', 'gTTS', 'Requests', 'dotenv'],
    keyResults: [
      'Génération automatique d’histoires via Mistral',
      'Création d’images via l’API Grok',
      'Synthèse vocale avec gTTS',
      'Interface interactive développée avec Streamlit',
      'Gestion sécurisée des clés API via .env',
      'Intégration complète texte + image + audio',
    ],
    thumbnail: thumbStoryMint,
    images: [],
    githubUrl: 'https://github.com/emery-fokus/StoryMint',
    featured: true,
  },
  {
    slug: 'analyse-des-avis-amazon-data-analyst',
    title: 'Analyse des avis Amazon – Data Analyst',
    category: 'PY',
    summary:
      'Analyse d’un jeu de données contenant des avis sur des produits Amazon, incluant nettoyage, exploration et visualisations des tendances par marque, catégorie et année d’ajout.',
    description: `Ce projet analyse un jeu de données contenant des avis clients sur des produits Amazon. L'objectif est d'explorer les tendances liées aux marques, aux catégories de produits et aux dates d'ajout.

L'analyse comprend :
– Nettoyage des données brutes
– Conversion des dates et suppression des doublons
– Création d'une colonne annee_ajout
– Exploration des marques les plus présentes
– Analyse des catégories dominantes
– Visualisation des tendances temporelles

Le projet est structuré en trois dossiers :
– data/ : données brutes
– scripts/ : script Python principal (main.py)
– images/ : graphiques générés

Ce travail met en avant des compétences en manipulation de données, visualisation et analyse exploratoire.`,
    tools: ['Python', 'Pandas', 'Matplotlib'],
    keyResults: [
      'Nettoyage complet des données d’avis Amazon',
      'Création de la colonne annee_ajout',
      'Visualisation des tendances temporelles',
      'Top marques les plus présentes',
      'Top catégories les plus fréquentes',
    ],
    thumbnail: thumbAvisAmazon,
    images: [detailAvisAmazon1, detailAvisAmazon2],
    githubUrl: 'https://github.com/emery-fokus/data_analyst_2',
  },
  {
    slug: 'performance-livreur',
    title: 'Performance livreur',
    category: 'PBI',
    summary:
      'Analyse des performances de livraison d’un restaurant sur 300 commandes, avec focus sur les retards, les coûts et la satisfaction client.',
    description: `Ce projet Power BI vise à analyser les performances de livraison d'un restaurant sur une période de 10 mois. Nous avons étudié les retards, les coûts, les temps moyens par livreur, et la satisfaction client. Les retards représentent 23 % des livraisons, avec un impact direct sur les coûts et la satisfaction. Des recommandations sont proposées pour améliorer la fiabilité et optimiser les performances opérationnelles.`,
    tools: ['Power BI', 'DAX'],
    keyResults: [
      'Taux de retard : 23 %',
      'Temps moyen : 52,28 min',
      'Coût total : 4 210 €',
      '109 livraisons bien notées',
      'Retards plus coûteux que les livraisons à l’heure',
    ],
    thumbnail: thumbLivreur,
    images: [detailLivreur1],
    projectUrl:
      'https://app.powerbi.com/groups/me/reports/3b355892-d65a-495c-a69b-badf7364daa4?experience=power-bi',
  },
  {
    slug: 'arkose',
    title: 'ARKOSE',
    category: 'PBI',
    summary:
      'Analyse des indicateurs de performance liés aux passages et entrées chez Arkose Montreuil, afin d’identifier des leviers d’amélioration pour la communication et la stratégie marketing.',
    description: `Ce projet Power BI explore les données de fréquentation d'Arkose Montreuil à travers plusieurs indicateurs clés : taux de conversion, volume de passages, nombre d'entrées, consommation alimentaire et répartition temporelle.

L'objectif est d'identifier les jours faibles, les comportements de consommation, et les tendances mensuelles afin d'optimiser la communication et les actions marketing.

Les visualisations permettent de suivre :
– Le taux de conversion (passages → entrées)
– Le volume de passages par mois et par jour
– La consommation de plats par jour et par mois
– Les pics et creux de fréquentation
– Les leviers d'amélioration pour la stratégie marketing`,
    tools: ['Power BI', 'DAX'],
    keyResults: [
      'Taux de conversion : 7 %',
      '128K passages, 9K entrées',
      '350 passages en moyenne par jour',
      'Consommation plus faible les jours creux',
      'Pics de fréquentation identifiés par jour et mois',
      'Corrélation entre passage et consommation',
      'Recommandations marketing basées sur les KPIs',
    ],
    thumbnail: thumbArkose,
    images: [],
    projectUrl:
      'https://app.powerbi.com/groups/me/reports/d973ff78-c2b3-4e5e-add3-d2f546db44c1?experience=power-bi',
  },
  {
    slug: 'analyse-des-donnees-e-commerce',
    title: 'Analyse Amazon',
    category: 'PY',
    summary: 'Exploration d’un jeu de données Amazon : nettoyage, extraction d’insights et visualisation.',
    description: `Ce projet Python explore un jeu de données e-commerce contenant des informations sur des produits Amazon. L'objectif est de nettoyer les données, d'extraire des insights clés et de visualiser les tendances par marque, catégorie et année d'ajout.

L'analyse comprend :
– Chargement et nettoyage des données
– Conversion des dates et suppression des doublons
– Création d'une colonne annee_ajout
– Visualisation des produits ajoutés par année
– Identification des marques et catégories les plus fréquentes

Les visualisations incluent :
– Histogramme des ajouts par année
– Top 10 des marques les plus présentes
– Top 10 des catégories les plus fréquentes`,
    tools: ['Python', 'Pandas', 'Matplotlib'],
    keyResults: [
      'Nettoyage complet des données Amazon',
      'Création de la colonne annee_ajout',
      'Histogramme des ajouts par année',
      'Top 10 des marques les plus présentes',
      'Top 10 des catégories les plus fréquentes',
    ],
    thumbnail: thumbAmazon,
    images: [],
    githubUrl: 'https://github.com/emery-fokus/data_analyst_1',
  },
  {
    slug: 'analyse-des-ventes-des-instruments-de-musique',
    title: 'E-commerce musical',
    category: 'PBI',
    summary:
      'Étude des ventes des instruments de musique, avec focus sur les produits les plus vendus, les villes les plus rentables et les tendances mensuelles.',
    description: `Ce projet Power BI analyse les ventes des instruments de musique. L'objectif est d'identifier les produits les plus populaires, les villes générant le plus de chiffre d'affaires, et les périodes de forte demande.

Les données montrent que la guitare électrique est le produit le plus vendu, notamment en mai, période influencée par la Fête de la Musique. La ville de Lyon enregistre le chiffre d'affaires le plus élevé, suivie de Toulouse et Marseille.

Le tableau de bord présente :
– Le chiffre d'affaires par produit et par mois
– Les villes les plus rentables
– Le nombre total de commandes
– Des insights textuels sur les comportements d'achat

Ce projet met en évidence l'impact des événements culturels sur les ventes et propose des pistes pour cibler les bons produits au bon moment.`,
    tools: ['Power BI', 'DAX'],
    keyResults: [
      'Produit le plus vendu : Guitare Électrique',
      'Mois avec le plus de ventes : Mai',
      'Ville la plus rentable : Lyon',
      'Nombre total de commandes : 300',
      'Chiffre d’affaires total : ~87 000 €',
    ],
    thumbnail: thumbEcommerce,
    images: [detailEcommerce1],
    projectUrl:
      'https://app.powerbi.com/groups/me/datasets/58e1b96b-1d92-4ebe-b85b-b149fde6267b/details?experience=power-bi',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
