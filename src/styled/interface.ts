import 'styled-components'

declare module 'styled-components' {

    export interface DefaultLayout{
        AppContainer : {
            width : string;
            height : string;
            background : string;
        }
    }

}