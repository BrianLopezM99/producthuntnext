import React from 'react';
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
import Link from 'next/link'
import styled from '@emotion/react'
import {css} from '@emotion/core'

const Header = () => {
    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
            `}
        >
            <div>
                <div>
                    <p>P</p>

                    <Buscar />

                    <Navegacion />
                </div>

                <div>
                    <p>Hola: Brian</p>

                    <button type="button">Cerrar sesión</button>

                    <Link href="">Login</Link>
                    <Link href="">Crear Cuenta</Link>
                </div>
            </div>
        </header>
            
    );
};

export default Header;