﻿define(
	 ({
		viewer: {
			common: {
				close: "閉じる"
			},
			loading: {
				long: "アプリケーションを初期化しています",
				long2: "お待ちください",
				failButton: "アプリケーションの再読み込み"
			},
			signin: {
				title: "認証が必要です",
				explainViewer: "アプリケーションにアクセスするには、%PORTAL_LINK% でアカウントを使用してサイン インしてください。",
				explainBuilder: "アプリケーションを構成するには、%PORTAL_LINK% でアカウントを使用してサイン インしてください。"
			},
			errors: {
				boxTitle: "エラーが発生しました",
				invalidConfig: "無効な構成",
				invalidConfigNoApp: "Web マッピング アプリケーションの識別子が index.html で指定されていません。",
				unspecifiedConfigOwner: "権限のある所有者が構成されていません。",
				invalidConfigOwner: "アプリケーションの所有者に権限がありません。",
				createMap: "マップを作成できません",
				invalidApp: "%TPL_NAME% が存在しないか、アクセスできません。",
				appLoadingFail: "問題が発生しました。%TPL_NAME% を正しく読み込めませんでした。",
				notConfiguredDesktop: "このアプリケーションは、まだ構成されていません。",
				notConfiguredMobile: "%TPL_NAME% ビルダは、この画面の解像度でサポートされていません。",
				notAuthorized: "このアプリケーションにアクセスする権限がありません",
				noBuilderIE: "ビルダは、Internet Explorer %VERSION% より前のバージョンではサポートされていません。%UPGRADE%",
				noViewerIE: "このアプリケーションは、Internet Explorer %VERSION% より前のバージョンではサポートされていません。%UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>ブラウザを更新してください</a>。",
				mapLoadingFail: "問題が発生しました。マップを正しく読み込みませんでした。",
				signOut: "サイン アウト"
			},
			mobileInfo: {
				legend: "凡例",
				description: "説明",
				lblLegendMobileError: "凡例が利用できません。アプリケーションを再読み込みしてください。",
				lblLegendMobileErrorExplain: "アプリケーションを読み込んだときに、デバイスが回転して縦モードになっている場合は、凡例を使用できません。"
			},
			mobileFooter: {
				swipeInvite: "スワイプしてストーリーをナビゲート",
				lblNext: "次へ",
				lblEnd: "ストーリーが終わりました"
			},
			headerFromCommon: {
				storymapsText: "ストーリー マップ",
				builderButton: "編集",
				facebookTooltip: "Facebook で共有",
				twitterTooltip: "Twitter で共有",
				bitlyTooltip: "ショート リンクを取得",
				templateTitle: "テンプレートのタイトルの設定",
				templateSubtitle: "テンプレートのサブタイトルの設定",
				share: "共有"
			},
			overviewFromCommon: {
				title: "概観図"
			},
			legendFromCommon: {
				title: "凡例"
			},
			shareFromCommon: {
				copy: "コピー",
				copied: "コピー",
				open: "開く",
				embed: "Web ページに埋め込む",
				embedExplain: "アプリケーションを Web ページに埋め込むには、次の HTML コードを使用します。",
				size: "サイズ (幅/高さ):"
			}
        }
    })
);