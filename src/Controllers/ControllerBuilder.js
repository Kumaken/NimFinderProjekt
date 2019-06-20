//Basic Dependency:
//Component Dependency:
import RequestController from "./RequestController"; //add ./ to indicitate from current directory: Javascript

// ControllerBuilder:
class ControllerBuilder{
    constructor(){
        this.baseURL = 'https://api.stya.net/nim/';
        this.pageTitle = 'home';
    }

    withUserCredentials(_username, _password){
        this.username = _username;
        this.password = _password;
        return this
    }

    withPurpose(_purpose){
        this.purpose = _purpose;
        return this
    }

    withSetter(_setter){
        this.setter = _setter;
        return this
    }

    withToken(_token){
        this.token = _token;
        return this
    }

    withSearchString(_searchString){
        this.searchString = _searchString;
        return this
    }

    withSearchCount(_count){
        this.count = _count;
        return this
    }

    withPageTitle(_pageTitle){
        this.pageTitle = _pageTitle;
        return this
    }

    withNotifier(_OK, _Fail){
        this.notifyOK = _OK;
        this.notifyFail = _Fail;
        return this
    }

    withPageOffset(_pageOffset){
        this.pageOffset = _pageOffset;
        return this
    }

    build(){
        return new RequestController(this);
    }
}

//expose RequestController .js file so it can be imported by other modules:
export default ControllerBuilder;