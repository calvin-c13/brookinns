import React from 'react'
import { Link } from 'react-router-dom';
import DormMinicard from '../components/DormMinicard';
import noPhotoExterior from '../assets/exterior/noPhotoExterior.jpg';
import wagnerX from '../assets/exterior/wagnerExterior.png';
import westAX from '../assets/exterior/westAExterior.png';
import westBX from '../assets/exterior/westBExterior.png';
import westCX from '../assets/exterior/westCExterior.png';
import westDX from '../assets/exterior/westDExterior.png';
import westEX from '../assets/exterior/westEExterior.png';
import westFX from '../assets/exterior/westFExterior.png';
import westGX from '../assets/exterior/westGExterior.png';
import westHX from '../assets/exterior/westHExterior.png';
import westIX from '../assets/exterior/westIExterior.png';


export default function West() {
    return (
        <div className='flex flex-wrap justify-center gap-8 p-4'>

            <h1 className='text-center text-5xl font-semibold mt-6 w-full uppercase'>
                West&nbsp; &nbsp;Side
            </h1>

            {/*Living learning*/}
            <DormMinicard
                to='/west/lauterbur'
                name='Lauterbur Hall'
                community='Living Learning Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/yang'
                name='Yang Hall'
                community='Living Learning Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />


            {/*Tabler*/}
            <DormMinicard
                to='/west/chinn'
                name='Chinn Hall'
                community='Tabler Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/douglass'
                name='Douglass Hall'
                community='Tabler Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/dreiser'
                name='Dreiser Hall'
                community='Tabler Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/hand'
                name='Hand Hall'
                community='Tabler Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/toscanini'
                name='Toscanini Hall'
                community='Tabler Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />



            {/*Roosevelt*/}
            <DormMinicard
                to='/west/wagner'
                name='Wagner Hall'
                community='Roosevelt Community'
                image={wagnerX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/stimson'
                name='Stimson Hall'
                community='Roosevelt Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/keller'
                name='Keller Hall'
                community='Roosevelt Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/greeley'
                name='Greeley Hall'
                community='Roosevelt Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />


            {/*Kelly*/}
            <DormMinicard
                to='/west/baruch'
                name='Baruch Hall'
                community='Kelly Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/dewey'
                name='Dewey Hall'
                community='Kelly Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/eisenhower'
                name='Eisenhower Hall'
                community='Kelly Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/hamilton'
                name='Hamilton Hall'
                community='Kelly Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/schick'
                name='Schick Hall'
                community='Kelly Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />


            {/*Roth*/}
            <DormMinicard
                to='/west/cardozo'
                name='Cardozo Hall'
                community='Roth Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/gershwin'
                name='Gerhswin Hall'
                community='Roth Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/hendrix'
                name='Hendrix Hall'
                community='Roth Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/mount'
                name='Mount Hall'
                community='Roth Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/whitman'
                name='Whitman Hall'
                community='Roth Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />


            {/*West*/}
            <DormMinicard
                to='/west/westA'
                name='West A Apartments'
                community='West Apartments'
                image={westAX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westB'
                name='West B Apartments'
                community='West Apartments'
                image={westBX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westC'
                name='West C Apartments'
                community='West Apartments'
                image={westCX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westD'
                name='West D Apartments'
                community='West Apartments'
                image={westDX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westE'
                name='West E Apartments'
                community='West Apartments'
                image={westEX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westF'
                name='West F Apartments'
                community='West Apartments'
                image={westFX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westG'
                name='West G Apartments'
                community='West Apartments'
                image={westGX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westH'
                name='West H Apartments'
                community='West Apartments'
                image={westHX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westI'
                name='West I Apartments'
                community='West Apartments'
                image={westIX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westJ'
                name='West J Apartments'
                community='West Apartments'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/west/westK'
                name='West K Apartments'
                community='West Apartments'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />


            {/*Schomburg*/}
            <DormMinicard
                to='/west/schomburg'
                name='Schomburg Apartments'
                community='Schomburg Apartments'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />


            {/*Chapin*/}
            <DormMinicard
                to='/west/chapin'
                name='Chapin Apartments'
                community='Chapin Apartments'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
        </div>
    )
}