import React from "react";
// import { Private } from './components-tsx/auth/Private'
// import { Profile } from './components-tsx/auth/Profile'
// import { List } from './components-tsx/generics/List'
// import { RandomNumber } from './components-tsx/restriction/RandomNumber'
// import { Toast } from './components-tsx/templateLiterals/Toast'
// import { CustomButton } from './components-tsx/html/Button'
// import { CustomInput } from './components-tsx/html/Input'
// import { Text } from './components-tsx/polymorphic/Text'
// import { CustomSelect } from './components-tsx/react-select/CustomSelect'
import AppProviders from "./components/providers/app-providers";
import CustomLottie from "./plugins/lottie/CustomLottie";
import Example from "./plugins/date-picker/Example";
import FormikExample from "./plugins/formik/FormikExample";
// import { Button } from './components-tsx/events/Button'
// import { Input } from './components-tsx/events/Input'
// import { Container } from './components-tsx/styles/Container'
// import { ThemeContextProvider } from './components-tsx/hooks/context/ThemeContext'
// import { Box } from './components-tsx/hooks/context/Box'
// import { UserContextProvider } from './components-tsx/hooks/context/UsetContext'
// import { User } from './components-tsx/hooks/context/User'
// import { MutableRef } from './components-tsx/hooks/ref/MutableRef'
// import { Counter } from './components-tsx/class/Counter'
// import { Greet } from './components-tsx/types/Greet'
// import { Person } from './components-tsx/types/person/Person'
// import { PersonList } from './components-tsx/types/person/PersonList'
// import { Status } from './components-tsx/types/Status'
// import { Heading } from './components-tsx/types/Heading'
// import { Oscar } from './components-tsx/types/Oscar'

type styleProps = {
  height: number
  width: number
}

type actionTypes = {
  visibility: number[]
  type: string
  frames: number[]
}

type interactivityTypes = {
  mode: string
  actions: actionTypes[]
}

function App() {
  // const personName = {
  //   first: 'Rasoul',
  //   last: 'Jabbari'
  // }
  //
  // const nameList = [
  //   {
  //     first: 'Rasoul',
  //     last: 'Jabbari'
  //   },
  //   {
  //     first: 'Rasoul2',
  //     last: 'Jabbari2'
  //   },
  //   {
  //     first: 'Rasoul3',
  //     last: 'Jabbari3'
  //   }
  // ]

  return (
    <AppProviders>
      <div className="App">
        {/*scroll animation*/}
        {/*<CustomLottie />*/}

        {/*multi language datepicker*/}
        {/*<Example />*/}

        {/*formik plugin*/}
        <FormikExample/>

        {/*types*/}
        {/*<Heading>This is header</Heading>*/}
        {/*<Oscar>*/}
        {/*  <Heading>Oscar goes to Leonardo Dicaprio!</Heading>*/}
        {/*</Oscar>*/}
        {/*<Greet name={'Rasoul'} messageCount={25} isLoggedIn={true}/>*/}
        {/*<Person name={personName}/>*/}
        {/*<PersonList names={nameList}/>*/}
        {/*<Status status={'error'}/>*/}

        {/*styles + events*/}
        {/*<Container styles={{border: '1px solid black', padding: '1rem'}}>*/}

        {/*  /!*events*!/*/}
        {/*  <Button*/}
        {/*    handleClick={(event, id) => {*/}
        {/*      console.log('Button Click', event, id)*/}
        {/*    }}>Click</Button>*/}

        {/*  <Input value={''} handleChange={event => {*/}
        {/*    console.log(event)*/}
        {/*  }}/>*/}
        {/*</Container>*/}

        {/*useContext*/}
        {/*<ThemeContextProvider>*/}
        {/*  <Box />*/}
        {/*</ThemeContextProvider>*/}

        {/*<UserContextProvider>*/}
        {/*  <User />*/}
        {/*</UserContextProvider>*/}

        {/*<MutableRef />*/}

        {/*<Counter message={'counter is : '}/>*/}

        {/*<Private isLoggedIn={true} component={Profile}/>*/}

        {/*<List items={['Batman', 'Superman']} onClick={(item) => console.log(item)} />*/}
        {/*<List items={[1, 2, 3]} onClick={(item) => console.log(item)} />*/}

        {/*<RandomNumber value={10} isPositive/>*/}

        {/*<Toast position={'left-top'}/>*/}
        {/*<Toast position={'center'}/>*/}

        {/*<CustomButton variant={'primary'} onClick={() => console.log('clicked')}><span>Click Me</span></CustomButton>*/}

        {/*<CustomInput type={'text'} name={'first_name'} />*/}

        {/*<Text as={'h1'} size={'lg'}>Heading</Text>*/}
        {/*<Text as={'p'} size={'md'}>Paragraph</Text>*/}
        {/*<Text as={'label'} size={'sm'} color={'secondary'}>Label</Text>*/}

        {/*<CustomSelect/>*/}
      </div>
    </AppProviders>
  );
}

export default App;
