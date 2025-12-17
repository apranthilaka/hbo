const ChatMessage = () => {
    return (
        <>
            <div class="titleComponent">
                <div class="titleComponent__left">
                    <i class="ph-fill ph-squares-four"></i>
                    <h4>Site Map</h4>
                </div>
                <div class="titleComponent__right">
                    <div class="indicator indicator--green">
                        <div>
                            <p>Background Jobs</p>
                        </div>
                        <div class="indicator__value">1 Entries</div>
                    </div>

                    <div class="indicator indicator--red">
                        <div>
                            <p>Import Queue Status</p>
                        </div>
                        <div class="indicator__value">ON</div>
                    </div>

                    <div class="indicator indicator--yellow">
                        <div>
                            <p>Mailer Status</p>
                        </div>
                        <div class="indicator__value">OFF</div>
                    </div>
                    <div class="indicator indicator--gray">
                        <div>
                            <p>Main Queue Status</p>
                        </div>
                        <div class="indicator__value">ON</div>
                    </div>
                </div>
            </div>
            <div class="cardsTitle">
                <div class="cardsTitle_left">
                    <h5>125 Entities in Total</h5>
                </div>
                <div>
                    <div class="cardsTitle_right">
                        <select
                            name="favorite-cuisine"
                            aria-label="Select your favorite cuisine..."
                            required
                        >
                            <option selected disabled value="">
                                All (Entities + Master Entities)
                            </option>
                            <option>Italian</option>
                            <option>Japanese</option>
                            <option>Indian</option>
                            <option>Thai</option>
                            <option>French</option>
                        </select>

                        <input
                            type="search"
                            name="search"
                            placeholder="Search"
                            aria-label="Search"
                        />

                        <button class="primaryButton">Add Entity</button>
                    </div>
                </div>
            </div>
            <div class="cardsContainer">
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <div>
                                <i class="ph ph-chat-centered-dots"></i>
                                <p>Details</p>
                            </div>
                            <div>
                                <i class="ph ph-arrow-right right-icon"></i>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i class="ph ph-user"></i>
                                <p>User</p>
                            </div>
                            <div>
                                <i class="ph ph-arrow-right right-icon"></i>
                            </div>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
                <div class="card card--gp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>

                <div class="card card--lp">
                    <div class="card_heading">
                        <div class="card_icon">GP</div>
                        <h6>Card Title</h6>
                    </div>
                    <div class="card_links">
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Mapped Entities</p>
                        </div>
                        <div>
                            <p>Users</p>
                        </div>
                        <div>
                            <p>Data Requests</p>
                        </div>
                        <div>
                            <p>Add to My Entities</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const dashboardComponentRoot = document.querySelector(
    '#dashboardComponentRoot'
);
ReactDOM.createRoot(dashboardComponentRoot).render(<ChatMessage />);
