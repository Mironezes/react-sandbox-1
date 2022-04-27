import Image from './UI/Image'

type Props = {
    switchLang: any
}

function LangSwitcher({switchLang}:Props) {
    return(
        <div onChange={switchLang} className="lang-switcher">
            <label id="lang-switcher__en" >
                <input type="radio" value="en" name="language" defaultChecked /> 
                <Image 
                    src="/assets/images/flag--en.png" 
                    alt="icon" 
                    width="32" 
                    height="32" 
                />
            </label>
            <label id="lang-switcher__de">
                <input type="radio" value="de-DE" name="language"/> 
                <Image 
                    src="/assets/images/flag--de.png" 
                    width="32" 
                    height="32"
                    alt="icon" 
                />
            </label>
      </div>
    )
}
export default LangSwitcher