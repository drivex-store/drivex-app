"use client";

import { LenisProvider } from '@modules/providers/LenisProvider';
import PreloaderProvider from '@modules/providers/PreloaderProvider';
import { PageTransitionProvider } from '@modules/providers/PageTransitionProvider';
import { PageEnterProvider } from '@modules/providers/PageEnterProvider';
import { ModalProvider } from '@modules/providers/ModalProvider';
import { FooterVisibilityProvider as FooterProvider } from '@modules/providers/FooterProvider';
import { LazyAnalytics } from '@libs/analytics/LazyAnalytics';

export default function AppProviders({ children }) {
  return (
    <LenisProvider>
      <PreloaderProvider>
        <PageTransitionProvider>
          <PageEnterProvider>
            <ModalProvider>
                <FooterProvider>
                  <LazyAnalytics>
                    {children}
                  </LazyAnalytics>
                </FooterProvider>
            </ModalProvider>
          </PageEnterProvider>
        </PageTransitionProvider>
      </PreloaderProvider>
    </LenisProvider>
  );
}