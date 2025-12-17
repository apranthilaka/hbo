// components.js

const TopMenu = () => {
    return (
        <div class="topMenu">
            <div class="left">
                <div>
                    <div class="system-status">
                        <div class="system-status__circle"></div>
                        <div>Dev Server</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            History
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            IQ System
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
                <div>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
                <div class="right__cfa">
                    <a href="https://holtara.io/" target="_blank">
                        <img src="images/globe.gif" alt="" />
                        <i class="ph-fill ph-globe-hemisphere-west"></i>
                    </a>
                </div>
                <div class="user-details">
                    <p>Aravinda Prabath</p>
                    <div class="user-details__avatar">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const LeftMenu = () => {
    return (
        <div className="left-menu">
            <div class="logo">
                <img src="images/Holtara Logo.svg" alt="" />
                <i class="ph ph-x"></i>
            </div>
            <div class="menu-items">
                <ul>
                    <li class="li liactive">
                        <i class="ph ph-house"></i>
                        <a href="index.html">Site Map</a>
                    </li>
                    <li class="li">
                        <i class="ph ph-house"></i>
                        <a href="dashboard.html">Dashboard</a>
                    </li>

                    <li>
                        <i class="ph ph-house"></i>Assignment
                    </li>
                    <li>
                        <i class="ph ph-house"></i>System admin
                    </li>
                    <li>
                        <i class="ph ph-house"></i>Data
                    </li>
                    <li>
                        <i class="ph ph-house"></i>System admin
                    </li>
                    <li>
                        <i class="ph ph-house"></i>Navigations
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Function to initialize the components on any page
const initApp = () => {
    const topElement = document.getElementById('top-menu-root');
    const leftElement = document.getElementById('left-menu-root');

    if (topElement) {
        ReactDOM.createRoot(topElement).render(<TopMenu />);
    }
    if (leftElement) {
        ReactDOM.createRoot(leftElement).render(<LeftMenu />);
    }
};

initApp();
