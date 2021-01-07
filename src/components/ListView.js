import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Raw_layout from './Raw_layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ListView = () => (
    <View style={styles.container}>
        <Raw_layout
                    title={"Krunal"}
                    description={"Masters in Computer Science"}
                    image_url={"./assets/user.png"}
                />
    </View>
);


export default ListView;