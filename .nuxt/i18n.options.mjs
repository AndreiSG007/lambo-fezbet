import locale_en from "../lang/en.json" assert { type: "json" };
import locale_de from "../lang/de.json" assert { type: "json" };
import locale_it from "../lang/it.json" assert { type: "json" };
import locale_fi from "../lang/fi.json" assert { type: "json" };
import locale_pl from "../lang/pl.json" assert { type: "json" };
export const localeCodes = ["en","de","it","fi","pl"]

export const localeMessages = {
  "en": [{ key: "../lang/en.json", load: () => Promise.resolve(locale_en) }],
  "de": [{ key: "../lang/de.json", load: () => Promise.resolve(locale_de) }],
  "it": [{ key: "../lang/it.json", load: () => Promise.resolve(locale_it) }],
  "fi": [{ key: "../lang/fi.json", load: () => Promise.resolve(locale_fi) }],
  "pl": [{ key: "../lang/pl.json", load: () => Promise.resolve(locale_pl) }],
}

export const additionalMessages = Object({"de":[],"it":[],"fi":[],"pl":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"messages": Object({"en":{
  
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = [Object({"code":"en","file":"en.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/en.json"}),Object({"code":"de","file":"de.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/de.json"}),Object({"code":"it","file":"it.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/it.json"}),Object({"code":"fi","file":"fi.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/fi.json"}),Object({"code":"pl","file":"pl.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/pl.json"})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = "lang"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = false
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","file":"en.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/en.json"}),Object({"code":"de","file":"de.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/de.json"}),Object({"code":"it","file":"it.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/it.json"}),Object({"code":"fi","file":"fi.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/fi.json"}),Object({"code":"pl","file":"pl.json","path":"/Users/andreisoftgenius/Documents/LAMBO/lambo-promo-Fezbet/lang/pl.json"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = true
