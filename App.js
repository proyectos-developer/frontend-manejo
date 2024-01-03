import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen         from './src/components/begin/loading.jsx'
import LoginScreen           from './src/components/begin/login.jsx'
import RegisterScreen        from './src/components/begin/register.jsx'
import BeginSessionScreen    from './src/components/begin/beginsession.jsx'
import RestorePassScreen     from './src/components/begin/restorepass.jsx'
import UpdatePassScreen      from './src/components/begin/updatepass.jsx'
import UpdateDataScreen      from './src/components/begin/updatedata.jsx'

import SelectionScreen           from './src/components/home/selection.jsx'
import B2aCategoryQuestions     from './src/components/home/categoryb2a/questions.jsx'
import B2aCategoryAnswers    from './src/components/home/categoryb2a/answers.jsx'
import B2bCategoryQuestions     from './src/components/home/categoryb2b/questions.jsx'
import B2bCategoryAnswers    from './src/components/home/categoryb2b/answers.jsx'
import A2aCategoryQuestions    from './src/components/home/categorya2a/questions.jsx'
import A2aCategoryAnswers   from './src/components/home/categorya2a/answers.jsx'
import A3aCategoryQuestions  from './src/components/home/categorya3a/questions.jsx'
import A3aCategoryAnswers from './src/components/home/categorya3a/answers.jsx'
import A3bCategoryQuestions   from './src/components/home/categorya3b/questions.jsx'
import A3bCategoryAnswers  from './src/components/home/categorya3b/answers.jsx'
import AnswerScreen          from './src/components/home/answers.jsx'
import ClinicScreen        from './src/components/menu/clinic.jsx'
import DrivingSchoolScreen      from './src/components/menu/drivingschool.jsx'

const StackBegin           = createNativeStackNavigator()
const StackHome            = createNativeStackNavigator()

/**retira la barra por defecto */
const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack (){

    return(
        <StackHome.Navigator initialRouteName='SelectionScreen'>
            <StackHome.Screen name='SelectionScreen'          component={SelectionScreen}           options={navOptionHandler}/>
            <StackHome.Screen name='B2aCategoryQuestions'     component={B2aCategoryQuestions}     options={navOptionHandler}/>
            <StackHome.Screen name='B2aCategoryAnswers'       component={B2aCategoryAnswers}    options={navOptionHandler}/>
            <StackHome.Screen name='B2bCategoryQuestions'     component={B2bCategoryQuestions}     options={navOptionHandler}/>
            <StackHome.Screen name='B2bCategoryAnswers'       component={B2bCategoryAnswers}    options={navOptionHandler}/>
            <StackHome.Screen name='A2aCategoryQuestions'     component={A2aCategoryQuestions}    options={navOptionHandler}/>
            <StackHome.Screen name='A2aCategoryAnswers'       component={A2aCategoryAnswers}   options={navOptionHandler}/>
            <StackHome.Screen name='A3aCategoryQuestions'     component={A3aCategoryQuestions}  options={navOptionHandler}/>
            <StackHome.Screen name='A3aCategoryAnswers'       component={A3aCategoryAnswers} options={navOptionHandler}/>
            <StackHome.Screen name='A3bCategoryQuestions'     component={A3bCategoryQuestions}   options={navOptionHandler}/>
            <StackHome.Screen name='A3bCategoryAnswers'       component={A3bCategoryAnswers}  options={navOptionHandler}/>
            <StackHome.Screen name='AnswerScreen'             component={AnswerScreen}          options={navOptionHandler}/>
            <StackHome.Screen name='ClinicScreen'             component={ClinicScreen}        options={navOptionHandler}/>
            <StackHome.Screen name='DrivingSchoolScreen'      component={DrivingSchoolScreen}      options={navOptionHandler}/>
            <StackHome.Screen name='UpdateDataScreen'         component={UpdateDataScreen}     options={navOptionHandler}/>
        </StackHome.Navigator>
    )
}

export default function App() {

    return (  
        <Provider store={store}>
            <NavigationContainer>
                <StackBegin.Navigator initialRouteName='LoadingScreen'>
                    <StackBegin.Screen name='LoadingScreen'          component={LoadingScreen}          options={navOptionHandler}/>
                    <StackBegin.Screen name='LoginScreen'            component={LoginScreen}            options={navOptionHandler}/>
                    <StackBegin.Screen name='RegisterScreen'         component={RegisterScreen}         options={navOptionHandler}/>
                    <StackBegin.Screen name='BeginSessionScreen'     component={BeginSessionScreen}     options={navOptionHandler}/>
                    <StackBegin.Screen name='RestorePassScreen'  component={RestorePassScreen}  options={navOptionHandler}/>
                    <StackBegin.Screen name='UpdatePassScreen    '   component={UpdatePassScreen    }   options={navOptionHandler}/>
                    <StackBegin.Screen name='HomeStack'              component={HomeStack}              options={navOptionHandler}/>
                </StackBegin.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
