import axios from "axios";
import api from "./index";
import {
  Clinic,
  ClinicScreen,
  ConsultationScreen,
  Contact,
  FaqScreen,
  Goal,
  GoalsScreen,
  IService,
  MainScreen,
  NavigationItem,
  Price,
  ResultScreen,
  Room,
  RoomScreen,
  ServiceScreen,
  Taplink,
  Video,
  VisualizationScreen,
} from "./types";

enum REQUESTS {
  CLINICS = "clinics",
  CONTACTS = "contacts",
  GOALS = "goals",
  NAVIGATION_ITEMS = "navigation-items",
  ROOMS = "rooms",
  SERVICES = "services",
  CLINICS_SCREEN = "clinics-screen",
  CONSULTATION_SCREEN = "consultation-screen",
  FAQ_SCREEN = "faq-screen",
  GOALS_SCREEN = "goals-screen",
  MAIN_SCREEN = "main-screen",
  RESULT_SCREEN = "result-screen",
  ROOMS_SCREEN = "rooms-screen",
  SERVICE_SCREEN = "service-screen",
  VISUALIZATION_SCREEN = "visualization-screen",
  TAPLINKS = "taplinks",
  PRICES = "prices",
  VIDEOS = "video",
}

interface RequestData<T> {
  url: string;
  type: T;
}

const request: Record<REQUESTS, RequestData<any>> = {
  [REQUESTS.CLINICS]: { url: "/api/clinics?populate=*", type: {} as Clinic },
  [REQUESTS.CLINICS_SCREEN]: {
    url: "/api/clinics-screen?populate=*",
    type: {} as ClinicScreen,
  },
  [REQUESTS.CONSULTATION_SCREEN]: {
    url: "/api/consultation-screen?populate=*",
    type: {} as ConsultationScreen,
  },
  [REQUESTS.CONTACTS]: {
    url: "/api/contacts?populate=*",
    type: {} as Contact[],
  },
  [REQUESTS.FAQ_SCREEN]: {
    url: "/api/faq-screen?populate=*",
    type: {} as FaqScreen,
  },
  [REQUESTS.GOALS]: {
    url: "/api/goals?populate=*",
    type: {} as Goal[],
  },
  [REQUESTS.GOALS_SCREEN]: {
    url: "/api/goals-screen?populate=*",
    type: {} as GoalsScreen,
  },
  [REQUESTS.MAIN_SCREEN]: {
    url: "/api/main-screen?populate=*",
    type: {} as MainScreen,
  },
  [REQUESTS.NAVIGATION_ITEMS]: {
    url: "/api/navigation-items?populate=*",
    type: {} as NavigationItem[],
  },
  [REQUESTS.PRICES]: {
    url: "/api/prices?populate=*",
    type: {} as Price[],
  },
  [REQUESTS.RESULT_SCREEN]: {
    url: "/api/result-screen?populate=*",
    type: {} as ResultScreen,
  },
  [REQUESTS.ROOMS]: {
    url: "/api/rooms?populate=*",
    type: {} as Room[],
  },
  [REQUESTS.ROOMS_SCREEN]: {
    url: "/api/rooms-screen?populate=*",
    type: {} as RoomScreen,
  },
  [REQUESTS.SERVICES]: {
    url: "/api/services?populate=*",
    type: {} as IService[],
  },
  [REQUESTS.SERVICE_SCREEN]: {
    url: "/api/service-screen?populate=*",
    type: {} as ServiceScreen,
  },
  [REQUESTS.VISUALIZATION_SCREEN]: {
    url: "/api/visualization-screen?populate=*",
    type: {} as VisualizationScreen,
  },
  [REQUESTS.TAPLINKS]: {
    url: "/api/taplinks?populate=*",
    type: {} as Taplink[],
  },
  [REQUESTS.VIDEOS]: {
    url: "/api/videos?populate=*",
    type: {} as Video[],
  },
};

export interface State {
  clinicsData: Clinic[];
  clinicScreen: ClinicScreen;
  consultationScreen: ConsultationScreen;
  contacts: Contact[];
  faqSqreen: FaqScreen;
  goals: Goal[];
  goalScreen: GoalsScreen;
  mainScreen: MainScreen;
  navigationItems: NavigationItem[];
  prices: Price[];
  resultScreen: ResultScreen;
  rooms: Room[];
  roomScreen: RoomScreen;
  services: IService[];
  serviceScreen: ServiceScreen;
  visualizationScreen: VisualizationScreen;
  taplinks: Taplink[];
  videos: Video[];
}

async function fetchDynamicUrls(): Promise<State> {
  const requestConfigs = Object.values(request).map(({ url }) => api.get(url));

  const responses = await axios.all(requestConfigs);

  const clinicsData: Clinic[] = responses[0].data.data;
  const clinicScreen: ClinicScreen = responses[1].data.data;
  const consultationScreen: ConsultationScreen = responses[2].data.data;
  console.log(consultationScreen);
  const contacts: Contact[] = responses[3].data.data;
  const faqSqreen: FaqScreen = responses[4].data.data;
  const goals: Goal[] = responses[5].data.data;
  const goalScreen: GoalsScreen = responses[6].data.data;
  const mainScreen: MainScreen = responses[7].data.data;
  const navigationItems: NavigationItem[] = responses[8].data.data;
  const prices: Price[] = responses[9].data.data;
  const resultScreen: ResultScreen = responses[10].data.data;
  const rooms: Room[] = responses[11].data.data;
  const roomScreen: RoomScreen = responses[12].data.data;
  const services: IService[] = responses[13].data.data;
  const serviceScreen: ServiceScreen = responses[14].data.data;
  const visualizationScreen: VisualizationScreen = responses[15].data.data;
  const taplinks: Taplink[] = responses[16].data.data;
  const videos: Video[] = responses[17].data.data;

  return {
    clinicsData,
    clinicScreen,
    consultationScreen,
    contacts,
    faqSqreen,
    goals,
    goalScreen,
    mainScreen,
    navigationItems,
    prices,
    resultScreen,
    rooms,
    roomScreen,
    services,
    serviceScreen,
    visualizationScreen,
    taplinks,
    videos,
  };
}

export default fetchDynamicUrls;
