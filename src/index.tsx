import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import fetchDynamicUrls, { State } from "./api/fetchMultipleUrls";

export const defaultState: State = {
  clinicsData: [], // Default to an empty array of clinics
  clinicScreen: {
    id: 0,
    documentId: "",
    title_row1: "",
    title_row2: "",
    description: "",
    tag: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    zurab_image: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  },
  consultationScreen: {
    id: 0,
    documentId: "",
    title_row1: "",
    title_row2: "",
    tag: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    description: "",
    consultation_button: {
      id: 0,
      text: "",
      link: "",
      isArrow: false,
      isExternal: false,
    },
    image: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    desktopImage: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  },
  contacts: [],
  faqSqreen: {
    id: 0,
    documentId: "",
    title_row1: "",
    title_row2: "",
    tag: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  },
  goals: [],
  goalScreen: {
    id: 0,
    documentId: "",
    title_row1: "",
    tag: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    title_row2: "",
  },
  mainScreen: {
    id: 0,
    documentId: "",
    title_row_1: "",
    title_row_2: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    service_button: {
      id: 0,
      text: "",
      link: "",
      isArrow: false,
      isExternal: false,
    },
    consultation_button: {
      id: 0,
      text: "",
      link: "",
      isArrow: false,
      isExternal: false,
    },
    background: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  },
  navigationItems: [],
  prices: [],
  resultScreen: {
    id: 0,
    documentId: "",
    title: "",
    tag: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    instagram_button: {
      id: 0,
      text: "",
      link: "",
      isArrow: false,
      isExternal: false,
    },
    image: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    desktopImage: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  },
  rooms: [],
  roomScreen: {
    id: 0,
    documentId: "",
    title_row1: "",
    title_row2: "",
    tag: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  },
  services: [],
  serviceScreen: {
    id: 0,
    documentId: "",
    title: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    all_service_button: {
      id: 0,
      text: "",
      link: "",
      isArrow: false,
      isExternal: false,
    },
  },
  visualizationScreen: {
    id: 0,
    documentId: "",
    title: "",
    tag: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    consultation_button: {
      id: 0,
      text: "",
      link: "",
      isArrow: false,
      isExternal: false,
    },
    image: {
      id: 0,
      documentId: "",
      name: "",
      alternativeText: null,
      caption: null,
      width: 0,
      height: 0,
      formats: {
        thumbnail: {
          ext: "",
          url: "",
          hash: "",
          mime: "",
          name: "",
          path: null,
          size: 0,
          width: 0,
          height: 0,
          sizeInBytes: 0,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  },
  taplinks: [],
};

export const Context = React.createContext<State>(defaultState);

const RootComponent: React.FC = () => {
  const [state, setState] = useState<State>(defaultState);

  useEffect(() => {
    fetchDynamicUrls().then((data) => {
      setState(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Context.Provider value={state}>
        <Provider store={store}>
          <App />
        </Provider>
      </Context.Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<RootComponent />);
