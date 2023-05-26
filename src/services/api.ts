import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.huggy.app/v3',
    headers: { 
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcyZmU4N2FhNTI1YmQxZDJmNjI3MDIzNzM5OWIwOWFiZTBhNWVhMmYxODk1MjIzMDE0MTJjNGI3NDZjN2YyNjk1NWM3MjY0YzhlMjMzZTlkIn0.eyJhdWQiOiJBUFAtZjQ0YmVkNGQtYWI2YS00YjVmLThhNzEtZWM0NGI3ZTE2OWE0IiwianRpIjoiNzJmZTg3YWE1MjViZDFkMmY2MjcwMjM3Mzk5YjA5YWJlMGE1ZWEyZjE4OTUyMjMwMTQxMmM0Yjc0NmM3ZjI2OTU1YzcyNjRjOGUyMzNlOWQiLCJpYXQiOjE2ODUxMDc4NjUsIm5iZiI6MTY4NTEwNzg2NSwiZXhwIjoxNzE2NzMwMjY1LCJzdWIiOiIxMjU2NjAiLCJzY29wZXMiOlsicGFuZWxfYXBwIiwiaW5zdGFsbF9hcHAiXX0.AaY0uIw9_Y2oNR-VGJYQ82La_oPNe2IGGX-lKc9kCdblRX0nC5vrlFF94L0YLXbjcnCgXaGhfVTDaxzIF3cCSbt7_i-FqNbd93t0dwW-OHpMmzJ0LtayWiszWN4qc7aaAIHubmuVAv5JjAXxADddcI96zcoDkutpM3DAqoxkWWw' 
    }
});

api.interceptors.response.use(
    response => response,
    error => error.response
)

export { api };