'use client';
import React from 'react';
import './style.css';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
    activityIcon,
    documentationIcon,
    FAQsIcon,
    lockIcon,
    overviewIcon,
    plusIcon,
    ReportIcon,
    searchIcon,
    settingsIcon
} from '@/assets';


const Sidebar = () => {
    const pathname = usePathname();
    const navigate = useRouter().push;
    const accountList = [
        {
            name: 'Account 1',
            balance: '0.00',
            address: '0x',
            emoji: '😀'
        },
        {
            name: 'Account 2',
            balance: '0.00',
            address: '0x',
            emoji: '😁'
        }
    ];

    const isActiveRoute = (route: string) => pathname === route;

    return (
        <div className="sidebarContainer">
            <div className="walletName-sidebar">
                <span>😀</span>
                <h2>Wallet 1</h2>
                <Image src={lockIcon} alt="lock-icon" />
            </div>
            <div className="addAccount-sidebar">
                <button>
                    <Image src={plusIcon} alt="plus-icon" />
                    <p>Add Account</p>
                </button>
                <button>
                    <Image src={searchIcon} alt="search-icon" />
                </button>
            </div>
            <div className="accountList-sidebar">
                <button
                    className={`route-sidebar ${isActiveRoute('/') ? 'activeRoute-sidebar' : ''}`}
                    onClick={() => navigate('/')}
                >
                    <Image src={overviewIcon} alt="overview-icon" />
                    <h3>Overview</h3>
                </button>
                <div>
                    <hr />
                    <div className="accountItems-sidebar">
                        {accountList.map((item, i) => (
                            <button key={`${i}-account`}>
                                <span>{item.emoji}</span>
                                <p>{item.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className={`route-sidebar ${isActiveRoute('/activity') ? 'activeRoute-sidebar' : ''}`}
                onClick={() => navigate('/activity')}
                style={{ marginTop: '0px' }}
            >
                <Image src={activityIcon} alt="activity-icon" />
                <h3>Activity</h3>
            </button>
            <button
                className={`route-sidebar ${isActiveRoute('/settings') ? 'activeRoute-sidebar' : ''}`}
                style={{ marginTop: 'auto' }}
            >
                <Image src={settingsIcon} alt="settings-icon" />
                <h3>Settings</h3>
            </button>
            <button
                className={`route-sidebar ${isActiveRoute('/documentation') ? 'activeRoute-sidebar' : ''}`}
            >
                <Image src={documentationIcon} alt="documentation-icon" />
                <h3>Documentation</h3>
            </button>
            <button
                className={`route-sidebar ${isActiveRoute('/frequently-asked-questions') ? 'activeRoute-sidebar' : ''}`}
            >
                <Image src={FAQsIcon} alt="faqs-icon" />
                <h3>FAQs</h3>
            </button>
            <button
                className={`route-sidebar ${isActiveRoute('/report-bug') ? 'activeRoute-sidebar' : ''}`}
            >
                <Image src={ReportIcon} alt="report-icon" />
                <h3>Report Bug</h3>
            </button>
        </div>
    );
};

export default Sidebar;
