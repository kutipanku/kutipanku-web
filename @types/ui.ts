export interface MenuItem {
  icon: string;
  title: string;
  to?: string;
}

export interface Quote {
  id: string;
  content: string;
  author: string;
  category: string;
}
export interface UiState {
  drawerNavMenu: MenuItem[];
}
