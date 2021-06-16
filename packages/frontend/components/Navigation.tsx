//Project imports
import styles from '../styles/Navigation.module.scss';
import NavigationItem from './Navigation/NavigationItem';

enum CircleX {
    Home = 208,
    Clips = 291,
    Messages = 374,
    Soundboard = 457,
    Credits = 540
}

interface NavProps {
    title: string,
    page: string
}

function Navigation({ title, page }:NavProps) {
    return (
    <div className={styles.navigation}>
        <div className={styles.name}>
            <svg viewBox="0 0 431 221" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 221V0H395L340.571 131.04L0 221Z" fill="#FF7B39" fillOpacity="0.61"/>
                </g>
                <g>
                    <path d="M-26 198V-29H431L378.5 105.598L-26 198Z" fill="#FF7B39"/>
                </g>
                <text x="40%" y="50%" dominantBaseline="middle" textAnchor="middle">
                    桐生ココ
                </text>
            </svg>
        </div>
        <div className={styles.navigators}>
            <svg viewBox="0 0 631 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M42 0H642V108.898L196.889 126L42 0Z" fill="#FF7B39" fillOpacity="0.57"/>
                </g>
                <g>
                    <path d="M0 -20H650V88.8983L145.013 106L0 -20Z" fill="#FF7B39" />
                </g>   
                <g>
                    <NavigationItem
                        href="/"
                        x="189"
                        y="26"
                        width="38"
                        height="40"
                        path="M204.984 26.5735C205.829 25.8637 206.897 25.4746 208 25.4746C209.103 25.4746 210.171 25.8637 211.016 26.5735L225.078 38.3985C225.602 38.8383 226.022 39.3874 226.311 40.0071C226.6 40.6268 226.75 41.3022 226.75 41.986V61.6266C226.75 62.4554 226.421 63.2502 225.835 63.8363C225.249 64.4223 224.454 64.7516 223.625 64.7516H215.031C214.202 64.7516 213.408 64.4223 212.822 63.8363C212.235 63.2502 211.906 62.4554 211.906 61.6266V50.6891H204.094V61.6266C204.094 62.4554 203.765 63.2502 203.178 63.8363C202.592 64.4223 201.798 64.7516 200.969 64.7516H192.375C191.546 64.7516 190.751 64.4223 190.165 63.8363C189.579 63.2502 189.25 62.4554 189.25 61.6266V41.9844C189.25 41.3007 189.4 40.6253 189.689 40.0055C189.978 39.3858 190.398 38.8368 190.922 38.3969L204.984 26.5719V26.5735ZM209.006 28.9641C208.725 28.727 208.368 28.5969 208 28.5969C207.632 28.5969 207.275 28.727 206.994 28.9641L192.931 40.7922C192.757 40.9385 192.618 41.121 192.522 41.3269C192.425 41.5328 192.375 41.7572 192.375 41.9844V61.625H200.969V50.6875C200.969 49.8587 201.298 49.0639 201.884 48.4778C202.47 47.8918 203.265 47.5625 204.094 47.5625H211.906C212.735 47.5625 213.53 47.8918 214.116 48.4778C214.702 49.0639 215.031 49.8587 215.031 50.6875V61.625H223.625V41.9844C223.625 41.7567 223.575 41.5317 223.479 41.3252C223.383 41.1187 223.243 40.9357 223.069 40.7891L209.006 28.9641Z" />
                    <NavigationItem
                        href="/clips"
                        x="270"
                        y="34"
                        width="42"
                        height="30"
                        path="M303.5 38.5833C303.5 36.2854 301.631 34.4167 299.333 34.4167H274.333C272.035 34.4167 270.167 36.2854 270.167 38.5833V59.4167C270.167 61.7146 272.035 63.5833 274.333 63.5833H299.333C301.631 63.5833 303.5 61.7146 303.5 59.4167V52.4729L311.833 59.4167V38.5833L303.5 45.5271V38.5833ZM299.338 59.4167H274.333V38.5833H299.333L299.335 48.9979L299.333 49L299.335 49.0021L299.338 59.4167Z" />
                    <NavigationItem
                        href="/messages"
                        x="353"
                        y="30"
                        width="42"
                        height="42"
                        path="M390.5 30H357.167C354.869 30 353 31.8687 353 34.1667V59.1667C353 61.4646 354.869 63.3333 357.167 63.3333H363.417V71.1812L376.494 63.3333H390.5C392.798 63.3333 394.667 61.4646 394.667 59.1667V34.1667C394.667 31.8687 392.798 30 390.5 30ZM390.5 59.1667H375.34L367.583 63.8187V59.1667H357.167V34.1667H390.5V59.1667Z" />
                    <NavigationItem
                        href="/soundboard"
                        x="436"
                        y="26"
                        width="42"
                        height="39"
                        path="M459.083 30.7979C459.083 26.9292 454.271 25.15 451.752 28.0875L444.167 36.9375C443.971 37.1662 443.728 37.3498 443.455 37.4756C443.182 37.6015 442.884 37.6667 442.583 37.6667H442.417C440.759 37.6667 439.169 38.3251 437.997 39.4972C436.825 40.6693 436.167 42.2591 436.167 43.9167V48.0833C436.167 49.7409 436.825 51.3306 437.997 52.5027C439.169 53.6748 440.759 54.3333 442.417 54.3333H442.583C442.884 54.3333 443.182 54.3985 443.455 54.5244C443.728 54.6502 443.971 54.8338 444.167 55.0625L451.752 63.9125C454.271 66.85 459.083 65.0708 459.083 61.2021V30.7979ZM447.329 39.6521L454.917 30.7958V61.2L447.329 52.3458C446.742 51.6618 446.014 51.113 445.195 50.7368C444.376 50.3607 443.485 50.1662 442.583 50.1667H442.417C441.864 50.1667 441.334 49.9472 440.944 49.5565C440.553 49.1658 440.333 48.6359 440.333 48.0833V43.9167C440.333 43.3641 440.553 42.8342 440.944 42.4435C441.334 42.0528 441.864 41.8333 442.417 41.8333H442.583C443.485 41.8333 444.376 41.6382 445.195 41.2613C446.015 40.8844 446.743 40.3347 447.329 39.65V39.6521ZM470.825 29.9062C470.628 29.7119 470.394 29.5589 470.137 29.456C469.88 29.3531 469.605 29.3025 469.328 29.3071C469.051 29.3116 468.778 29.3713 468.525 29.4827C468.271 29.594 468.043 29.7547 467.852 29.9555C467.661 30.1562 467.513 30.3929 467.415 30.6518C467.317 30.9107 467.271 31.1865 467.281 31.4632C467.29 31.7398 467.355 32.0118 467.471 32.2631C467.587 32.5145 467.752 32.7402 467.956 32.9271C475.571 40.1604 475.571 51.8396 467.956 59.0729C467.568 59.4561 467.345 59.9765 467.336 60.5223C467.327 61.068 467.532 61.5956 467.908 61.9914C468.284 62.3872 468.8 62.6197 469.346 62.6388C469.891 62.658 470.422 62.4622 470.825 62.0937C480.169 53.2187 480.169 38.7812 470.825 29.9062ZM464.685 35.7396C464.285 35.3589 463.749 35.1529 463.197 35.167C462.645 35.181 462.12 35.414 461.74 35.8146C461.359 36.2152 461.153 36.7506 461.167 37.303C461.181 37.8555 461.414 38.3797 461.815 38.7604C466.038 42.7708 466.038 49.2292 461.815 53.2396C461.414 53.6203 461.181 54.1445 461.167 54.697C461.153 55.2494 461.359 55.7848 461.74 56.1854C462.12 56.586 462.645 56.8189 463.197 56.833C463.749 56.8471 464.285 56.6411 464.685 56.2604C470.638 50.6062 470.638 41.3937 464.685 35.7396Z" />
                    <path d="M537.656 37.4062C537.656 38.0279 537.903 38.624 538.343 39.0635C538.782 39.5031 539.378 39.75 540 39.75C540.622 39.75 541.218 39.5031 541.657 39.0635C542.097 38.624 542.344 38.0279 542.344 37.4062C542.344 36.7846 542.097 36.1885 541.657 35.749C541.218 35.3094 540.622 35.0625 540 35.0625C539.378 35.0625 538.782 35.3094 538.343 35.749C537.903 36.1885 537.656 36.7846 537.656 37.4062ZM541.172 42.875H538.828C538.613 42.875 538.438 43.0508 538.438 43.2656V56.5469C538.438 56.7617 538.613 56.9375 538.828 56.9375H541.172C541.387 56.9375 541.562 56.7617 541.562 56.5469V43.2656C541.562 43.0508 541.387 42.875 541.172 42.875Z" fill="white"/>
                    <NavigationItem
                        href="/credits"
                        x="518"
                        y="24"
                        width="44"
                        height="44"
                        path="M540 24.125C527.92 24.125 518.125 33.9199 518.125 46C518.125 58.0801 527.92 67.875 540 67.875C552.08 67.875 561.875 58.0801 561.875 46C561.875 33.9199 552.08 24.125 540 24.125ZM540 64.1641C529.971 64.1641 521.836 56.0293 521.836 46C521.836 35.9707 529.971 27.8359 540 27.8359C550.029 27.8359 558.164 35.9707 558.164 46C558.164 56.0293 550.029 64.1641 540 64.1641Z" />
                </g>
                <circle cx={CircleX[page]} cy="79" r="5" fill="white"/>
            </svg>
        </div>
        <div className={styles.title}>
            <svg viewBox="0 0 763 221" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 198L11.5157 0L709.969 29.7L733 140.766L0 198Z" fill="#FF7B39" fillOpacity="0.63"/>
                    <path d="M15 221L26.7514 23L739.497 52.7L763 163.766L15 221Z" fill="#FF7B39" />
                </g>
                <text x="38" y="140">{title}</text>
            </svg>
        </div>
        <div className={styles.image}>

        </div>
    </div>)
}

export default Navigation