import { NavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../types";

class NavigationService {
  private _navigatorRef: NavigationContainerRef<RootStackParamList> | null| undefined;
  constructor() {

  }
  setTopLevelNavigator(ref: NavigationContainerRef<RootStackParamList> | null | undefined) {
    this._navigatorRef = ref;
  }
  navigate(routeName: keyof RootStackParamList, params: any = null) {
    this._navigatorRef?.navigate(routeName, params)
  }
}

export default new NavigationService();
