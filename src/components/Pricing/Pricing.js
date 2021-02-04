import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Tariff Plans</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>₹399</PricingCardCost>
                <PricingCardLength>Pack Details</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1.5 GB /Day</PricingCardFeature>
                  <PricingCardFeature>56 days validity</PricingCardFeature>
                  <PricingCardFeature>Truely Unlimited Calls</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>₹598</PricingCardCost>
                <PricingCardLength>Pack Details</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1.5 GB /Day</PricingCardFeature>
                  <PricingCardFeature>84 days Validity</PricingCardFeature>
                  <PricingCardFeature>Truely Unlimited Calls</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>₹2498</PricingCardCost>
                <PricingCardLength>Pack details</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>2 GB /Day</PricingCardFeature>
                  <PricingCardFeature>365 days Validity</PricingCardFeature>
                  <PricingCardFeature>Truely Unlimited Calls</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
