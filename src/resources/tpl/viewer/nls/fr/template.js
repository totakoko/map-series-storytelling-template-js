﻿define(
	 ({
		viewer: {
			common: {
				close: "Fermer"
			},
			loading: {
				long: "L\'application est en cours d\'initialisation",
				long2: "Merci de patienter",
				failButton: "Recharger l\'application"
			},
			signin: {
				title: "L\'authentification est nécessaire",
				explainViewer: "Connectez-vous avec un compte sur %PORTAL_LINK% pour accéder à l\'application.",
				explainBuilder: "Connectez-vous avec un compte sur %PORTAL_LINK% pour configurer l\'application."
			},
			errors: {
				boxTitle: "Une erreur s’est produite",
				invalidConfig: "Configuration non valide",
				invalidConfigNoApp: "Identifiant de l\'application cartographique Web non spécifié dans index.html.",
				unspecifiedConfigOwner: "Le propriétaire autorisé n\'est pas configuré.",
				invalidConfigOwner: "Le propriétaire de l\'application n\'est pas autorisé.",
				createMap: "Impossible de créer la carte",
				invalidApp: "Le %TPL_NAME% n\'existe pas ou est inaccessible.",
				appLoadingFail: "Une erreur s\'est produite et le chargement de %TPL_NAME% ne s\'est pas correctement déroulé.",
				notConfiguredDesktop: "L\'application n\'est pas encore configurée.",
				notConfiguredMobile: "Le générateur de %TPL_NAME% n\'est pas pris en charge avec cette résolution d\'écran.",
				notAuthorized: "Vous n'êtes pas autorisé à accéder à cette application",
				noBuilderIE: "Le générateur n\'est pas pris en charge dans Internet Explorer avant la version %VERSION%. %UPGRADE%",
				noViewerIE: "Cette application n\'est pas prise en charge dans Internet Explorer avant la version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Mettez votre navigateur à jour</a>.",
				mapLoadingFail: "Une erreur s\'est produite et la carte n\'a pas été correctement chargée.",
				signOut: "Déconnexion"
			},
			mobileInfo: {
				legend: "Légende",
				description: "Description",
				lblLegendMobileError: "La légende n\'est pas disponible. Rechargez l\'application.",
				lblLegendMobileErrorExplain: "La légende n\'est pas disponible lorsque l\'appareil est pivoté en mode portrait après le chargement de l\'application."
			},
			mobileFooter: {
				swipeInvite: "Effectuez un balayage pour parcourir le récit",
				lblNext: "Suivant",
				lblEnd: "Vous êtes parvenu au terme du récit"
			},
			headerFromCommon: {
				storymapsText: "Story Map",
				builderButton: "Mettre à jour",
				facebookTooltip: "Partager sur Facebook",
				twitterTooltip: "Partager sur Twitter",
				bitlyTooltip: "Obtenir un lien court",
				templateTitle: "Définir le titre du modèle",
				templateSubtitle: "Définir le sous-titre du modèle",
				share: "Partager"
			},
			overviewFromCommon: {
				title: "Vue générale"
			},
			legendFromCommon: {
				title: "Légende"
			},
			shareFromCommon: {
				copy: "Copier",
				copied: "Copié",
				open: "Ouvrir",
				embed: "Incorporer dans une page Web",
				embedExplain: "Utilisez le code HTML suivant pour incorporer l\'application dans une page Web.",
				size: "Taille (largeur/hauteur) :"
			}
        }
    })
);