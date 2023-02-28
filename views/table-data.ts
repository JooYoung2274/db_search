// const Creators = ['Users', 'CreatorLanguages', 'CreatorHashTags', 'CreatorDates'];
// const Users = ['Creators', 'Pricings', 'Projects', 'Filters', 'Likes'];
// const Filters = ['Users', 'PriceCategories', 'FilterHashTags', 'Likes', 'Projects', 'FilterStyles', 'FilterMoods', 'FilterThemes', 'FilterTrackers'];
// const Projects = ['Users', 'PriceCategories', 'ProjectMainStatuses', 'Filters', 'ProjectFiles'];
// const Dates = ['CreatorDates'];
// const Languages = ['CreatorLanguages'];
// const HashTags = ['CreatorHashTags', 'FilterHashTags'];
// const Likes = ['Users', 'Filters'];
// const Pricings = ['Users', 'PriceCategories'];
// const Moods = ['FilterMoods'];
// const Styles = ['FilterStyles'];
// const Themes = ['FilterThemes'];
// const Trackers = ['FilterTrackers'];
// const Reasons = ['ProjectMainStatuses'];
// const ProjectMainStatuses = ['Projects', 'Reasons', 'ProjectSubStatuses'];
// const ProjectSubStatuses = ['ProjectMainStatuses'];
// const UserWithDrawals = [];

export const tables = {
    Users: ['Creators', 'Pricings', 'Projects', 'Filters', 'Likes'],
    Creators: ['Users', 'CreatorLanguages', 'CreatorHashTags', 'CreatorDates'],
    Filters: ['Users', 'PriceCategories', 'FilterHashTags', 'Likes', 'Projects', 'FilterStyles', 'FilterMoods', 'FilterThemes', 'FilterTrackers'],
    Projects: ['Users', 'PriceCategories', 'ProjectMainStatuses', 'Filters', 'ProjectFiles'],
    Dates: ['CreatorDates'],
    Languages: ['CreatorLanguages'],
    HashTags: ['CreatorHashTags', 'FilterHashTags'],
    Likes: ['Users', 'Filters'],
    Pricings: ['Users', 'PriceCategories'],
    Moods: ['FilterMoods'],
    Styles: ['FilterStyles'],
    Themes: ['FilterThemes'],
    Trackers: ['FilterTrackers'],
    Reasons: ['ProjectMainStatuses'],
    ProjectMainStatuses: ['Projects', 'Reasons', 'ProjectSubStatuses'],
    ProjectSubStatuses: ['ProjectMainStatuses'],
    UserWithDrawals: [],
};
