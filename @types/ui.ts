export interface MenuItem {
  icon: string;
  title: string;
  to?: string;
}

export interface QuoteContent {
  en: string;
  id: string;
}

export interface Quote {
  id: string;
  content: QuoteContent;
  author: string;
  category: string;
}
export interface UiState {
  darkMode: boolean;
  quoteLanguage: string;
  displayLanguage: string;
  drawerNavMenu: MenuItem[];
}
