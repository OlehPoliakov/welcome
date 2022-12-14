import styled from 'styled-components';
import mobile from '../../../Assets/img/hero/mobile/mobile.jpg';
import mobile2x from '../../../Assets/img/hero/mobile/mobile@2x.jpg';
import tablet from '../../../Assets/img/hero/tablet/tablet.jpg';
import tablet2x from '../../../Assets/img/hero/tablet/tablet@2x.jpg';
import desktop from '../../../Assets/img/hero/desktop/desktop.jpg';
import desktop2x from '../../../Assets/img/hero/desktop/desktop@2x.jpg';

export const Wrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    height: auto;
  }
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-width: 320px;
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${mobile});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${mobile2x});
  }
  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 65px;
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${tablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${tablet2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 300px 0;
    min-width: 549px;
    height: 100%;
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${desktop});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${desktop2x});
    }
  }
  background-repeat: no-repeat;
  background-size: auto;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    padding-top: 0;
    padding-right: 0;
    padding-left: 167px;
  }
`;
