const count = 5;

let cache = [];
const owner_id = -9303029;
let offset = 0;
const ACCESS_TOKEN = "";

// Извлекает токен доступа из URL страницы. Предполагается, что токен доступа хранится в URL после символа = и до символа &.
const token = window.location.hash.split("=")[1].split("&")[0];

const fetchPosts = async () => {
  // Вызов метода API VK для получения записей со стены сообщества или пользователя.
// В аргументах передается метод "wall.get", и объект с параметрами запроса, такими как owner_id, domain, count, offset, access_token, и версия API.
  VK.Api.call(
    "wall.get",
    {
      owner_id: -208050206,
      domain: "vkdigitaltech",
      count: count,
      offset: offset,
      access_token: token,
      v: "5.134",
    },
    // Внутри коллбэк-функции обработки результата, если в ответе присутствует r.response, выводится сообщение с приветствием и именем пользователя 
    function (r) {
      if (r.response) {
        alert("Привет, " + r.response[0].first_name);
      }
    }
  );
};
fetchPosts();
