import {useState} from 'react'

const ThemeToggle = () => {
  // 使用 useState 来存储当前主题状态
  const [isDarkMold,setIsDarkMold] = useState(false);

  const toggleTheme = ()=>{
    setIsDarkMold((mode) =>!mode)
  }

  return (
    <div style={{height:"100vh",background:isDarkMold?'black':'white',
      color:isDarkMold?"white":"black"
    }}>
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sequi nam repudiandae quos! Autem vitae molestias illum eligendi ad cum, velit sapiente dolor cupiditate? Maxime mollitia illo maiores accusantium iure!</h2>
      <button onClick={toggleTheme}>切换到{isDarkMold?'白天':'暗黑'}模式</button>
      
    </div>
  )
}

export default ThemeToggle
