import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/projectExamples";

class ProjectExampleService {
	getProjectExamples(){
		return axios.get(EMPLOYEE_API_BASE_URL);
	}

	getProjectExamplesById(id){
		return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
	}
}
export default new ProjectExampleService();