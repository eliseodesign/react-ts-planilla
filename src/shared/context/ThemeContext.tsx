import { createContext, useContext, useState} from 'react';

interface ThemeContext {
  dark:boolean,
  changeTheme:()=> void
}

const DarkContext = createContext<ThemeContext>({
  dark:true,
  changeTheme:() =>{}
})


export const Provider : React.FC = ({children}: React.PropsWithChildren<{}>) =>{
  const [dark, setDark] = useState(false)

  const changeTheme = ()=> setDark(!dark)


  return <DarkContext.Provider value = {{dark, changeTheme}}>

  </DarkContext.Provider>

}