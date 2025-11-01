import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: '800'
  },
  closeButton: {
    padding: 8
  },
  closeText: {
    color: '#333',
    fontWeight: '700'
  },
  searchRow: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  studentName: {
    fontSize: 16,
    fontWeight: '800'
  },
  meta: {
    color: '#666',
    marginTop: 4
  },
  progress: {
    marginTop: 8,
    fontWeight: '700'
  }
});
