import AboutUsInformation from "../../organisms/AboutUsInformation";
import AboutUsStats from "../../organisms/AboutUsStats";
import Frontend from "../../templates/Frontend";
import * as S from './styles'

function AboutUs() {
    return (
        <Frontend>
            <S.Container>
                <AboutUsInformation />
                <AboutUsStats />
            </S.Container>
        </Frontend>
    );
}

export default AboutUs