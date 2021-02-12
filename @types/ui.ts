export interface MenuItem {
  icon: string;
  title: string;
  to?: string;
}

export interface UiState {
  drawerNavMenu: MenuItem[];
}
