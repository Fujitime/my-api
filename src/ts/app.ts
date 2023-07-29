import DarkModeModule from './dark';

interface ApiData {
  name: string;
  description: string;
  image: string;
  link: string;
}

async function fetchApiData(): Promise<ApiData[]> {
  try {
    const response = await fetch('../src/db/my-api.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    return [];
  }
}

function createApiElement(api: ApiData): string {
  return `
    <div class="api-item">
      <img src="${api.image}" alt="API Image" class="api-image">
      <h2 class="api-title">${api.name}</h2>
      <p class="api-description">${api.description}</p>
      <a href="${api.link}" target="_blank" class="api-link">Documentation</a>
    </div>
  `;
}

async function renderApiData(): Promise<void> {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  const apiList = await fetchApiData();
  const apiElements = apiList.map(createApiElement).join('');
  rootElement.innerHTML = apiElements;
}

renderApiData();

// Initialize the DarkModeModule
DarkModeModule.initialize();
